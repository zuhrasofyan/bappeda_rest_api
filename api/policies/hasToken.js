var expressJwt = require('express-jwt');
var secret = sails.config.secret;

// check if has token
module.exports = expressJwt({secret: secret});
