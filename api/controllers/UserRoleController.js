/**
 * UserRoleController
 *
 * @description :: Server-side logic for managing Userroles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getRoles: function (req, res) {
        Userrole.find().exec(function(err, result){
            if (err) {
                return res.notFound();
            } else {
                return res.json(result);
            }
        });
    },

    // Change user role
    changeRole: function (req, res) {
        var userId = req.param('id'), 
            role = req.param('role');
        // first, check if role is available from user-role table
        Userrole.find({name:role}).exec(function(error, response){
            if (error) {
                return res.notFound('Role yang anda inginkan tidak terdaftar');
            // if exist, update role
            } else {
                User.update({id:userId}, {role: role})
                .exec(function(err, result){
                    if (err) {
                        return res.serverError();
                    } else {
                        return res.ok('role berhasil diubah.');
                    }
                });
            }
        })
    }
};
