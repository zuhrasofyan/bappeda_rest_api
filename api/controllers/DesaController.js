/**
 * DesaController
 *
 * @description :: Server-side logic for managing desas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getDesa: function (req, res) {
        Dasar_desa.find().exec(function(err, result){
            if (err) {
                return res.notFound();
            } else {
                return res.json(result);
            } 
        })
    }
};

