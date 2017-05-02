/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var EmailAddresses = require('machinepack-emailaddresses');
var jwt = require('jsonwebtoken');
var fs = require('fs');
var secret = sails.config.secret;

module.exports = {
    register: function (req, res) {
        var email = req.param('email');
        var password = req.param('password');

        //validate request
        if (_.isUndefined(req.param('email'))) {  
            return res.badRequest('An email address is required!'); 
        }
        if (_.isUndefined(req.param('password'))) {
            return res.badRequest('A password is required');
        }
        if (req.param('password').length < 6) {
            return res.badRequest('A password must be at least 6 character');
        }
        EmailAddresses.validate({
            string: email
        }).exec({
            error : function (err) {
                return res.serverError(err);
            },
            invalid: function () {
                return res.badRequest('Does not looks like an email address for me :)');
            },
            success : function () {
                User.findOne({email:email}).exec(function (err, result){
                    //validate from database
                    if (err) {
                        return res.serverError(err);
                    } else if (result) {
                        return res.badRequest('Email already used!');
                    } else {

                        User.create({username:email, email:email, password:password}).exec(function (err, result){
                            if (err) {
                                return res.serverError(err);
                                //return res.badRequest('Error create user');
                            }
                            return res.ok();
                        });
                    }
                });
            }

        });



        //res.send({message: 'TODO: register User'});
    },

    //enable to show all user
    getAllUser: function (req, res) {
        User.find().exec(function (err, result){
            if (err) {
                return res.serverError();
            } else if (!result) {
                return res.notFound(undefined);
            } else {
                return res.json(result);
            }
        });
    },

    // upload avatar to a user
    uploadAvatar: function (req, res) {
        var userId = req.param('id');
        var filename = req.file('avatar')._files[0].stream.filename;

        //extract extension
        var extension = filename.substr(filename.lastIndexOf('.')+1).toLowerCase().toString();

        // Before upload new avatar, check and delete previous avatar file from system if exist.
        User.findOne(userId).exec(function(err, user){
            if (err) {return res.negotiate(err);}
            if (!user) {return res.badRequest();}
            if (user.avatarFd) {
                fs.stat(user.avatarFd, function (err, result){
                    if (err) {
                        console.log(err);
                    } else {
                        fs.unlink(user.avatarFd, function (err, res){
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('file deleted');
                            }
                        })
                    }
                })
            }
        });

        req.file('avatar').upload({
            // max size: ~2 MB
            maxBytes: 2000000,
            // set custom upload dir path name
            dirname: require('path').resolve(sails.config.appPath, 'assets/images/avatar')
        }, function whenDone(err, uploadedFiles){
            if (err) {
                return res.negotiate(err);
            }

            // if no file uploaded, response with error
            if (uploadedFiles.length === 0) {
                return res.badRequest('Tidak ada file yang diupload');
            }

            // if extension of uploaded image is not jpg or png, response with error
            if ((extension != "jpg") && (extension != "jpeg") && (extension != "png")) {
                return res.badRequest('Format gambar yang dibolehkan adalah jpeg, jpg atau png');
            }

            

            // Save the 'fd' and the url where avatar for a user can be accessed
            User.update(userId, {
                // Generate a unique URL where the avatar can be downloaded.
                avatarUrl: require('util').format('%s/user/avatar/%s', sails.config.appUrl, userId),

                // Grab the first file and use it's `fd` (file descriptor)
                avatarFd: uploadedFiles[0].fd
            })
            .exec(function(err){
                if (err) {
                    return res.negotiate(err);
                } else {
                    return res.ok('Berkas '+ filename + ' telah berhasil diunggah!' + extension);
                }
            })
        })
    },

    avatar: function (req, res) {
        //var userId = req.param('id');
        req.validate({
            id: 'string'
        });

        User.findOne(req.param('id')).exec(function(err, user){
            if (err) {return res.negotiate(err);}
            if (!user) {return res.badRequest('No no no no');}

            // User has no avatar image uploaded.
            // (should have never have hit this endpoint and used the default image)
            if (!user.avatarFd) {
                return res.notFound();
            }

            var SkipperDisk = require('skipper-disk');
            var fileAdapter = SkipperDisk(/* optional opts */);
            
            // set the filename to the same file as the user uploaded
            //res.set("Content-disposition", "image; filename='" + 'sasdd.jpg' + "'");

            // Stream the file down
            fileAdapter.read(user.avatarFd)
            .on('error', function (err){
                return res.serverError(err);
            })
            .pipe(res);
        });
    }
};
