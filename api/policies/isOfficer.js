/**
 * isAdmin
 *
 * @module      :: Policy
 * @description :: Simple policy to check user role if not ordinary user
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
var jwt = require('jsonwebtoken');
var secret = sails.config.secret;

module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller

  var decoded = jwt.verify(req.headers.authorization.split(' ')[1], secret);
  if (decoded) {
      if (decoded.role !== 'user') {
          return next();
      } else {return res.forbidden('login as admin or officer please!')};
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  //return res.forbidden('You are not permitted to perform this action.');
  return res.notFound('cannot authenticate user');
};
