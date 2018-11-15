/**
 * KecamatanController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getKecamatan: function (req, res) {
    Kecamatan.find().exec(function(err, result){
        if (err) {
            return res.notFound();
        } else {
            return res.json(result);
        }
    });
}

};

