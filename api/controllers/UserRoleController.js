/**
 * UserRoleController
 *
 * @description :: Server-side logic for managing Userroles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getRole: function (req, res) {
        UserRole.find().exec(function(err, result){
            if (err) {
                return res.notFound();
            } else {
                return res.json(result);
            }
        })
    }
};
