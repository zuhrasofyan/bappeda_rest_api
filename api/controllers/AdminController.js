/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  getUser: function(req, res) {
    var userId = req.param('id');
    User.findOne(userId).exec(function(err, result){
        if (err) {
            return res.serverError();
        } else if (!result) {
            return res.notFound();
        } else {
            return res.json(result);
        }
    })
  },

  // enable to show all user
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

};

