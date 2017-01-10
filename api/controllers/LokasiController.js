/**
 * LokasiController
 *
 * @description :: Server-side logic for managing lokasis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getLokasiOnKategori: function (req, res) {
        var a = req.params.kategori;
        Lokasi.find({KATEGORI: a}).exec(function(err, result){
            if (err) {
                return res.notFound();
            } else {
                return res.json(result);
            } 
        })
    }
};

