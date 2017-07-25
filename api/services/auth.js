var passport = require('passport');
var jwt = require('jsonwebtoken');
//var User = 

module.exports = {
    login: function (req, res) {
        passport.authenticate('local', function (err, user) {
            if (!user) {
                res.status(400).send({
                    success: false,
                    message: 'Password atau email yang anda masukkan salah. coba ulangi'
                });
                return;
            } else {
                if (err) {
                    res.status(400).send({
                        success: false,
                        message: 'Error pada server',
                        error: err
                    });
                    return;
                } else {

                    if (user[0].isActivated === false) {
                        res.status(401).send({
                            success: false,
                            message: 'Akun anda belum diaktivasi. Silahkan cek email atau hubungi admin.'
                        });
                        return;
                    } else if (user[0].isActivated === true){
                        //token expired in 1 day
                        var userdata = user[0];
                        delete userdata.password;
                        var token = jwt.sign(userdata, sails.config.secret, {expiresIn: 60 * 60 * 24});
                        // Set persistent cookie
                        req.session.cookie.token = token;
                        res.send({
                            success: true,
                            user: user[0],
                            token: token
                        });
                    } else {
                        res.status(400).send({
                            success: false,
                            message: 'Terjadi kesalahan pada server.'
                        })
                    }
                    
                }
            }
        })(req, res);
    },
    isvalidtoken: function (req, res) {
        if (req.headers.authorization) {
            jwt.verify(req.headers.authorization.replace('Bearer ', ''), sails.config.secret, function (err, decoded) {
                //418 = I'm a teapot!
                if (err) return res.status(401).send({success: false, message: 'invalid'});
                if (decoded) {
                    return res.send({success: true, user: decoded});
                }
            });
        } else {
            return res.status(401).send({success: false, message: 'token invalid'});
        }
    }
};
