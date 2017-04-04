/**
 * LokasiController
 *
 * @description :: Server-side logic for managing lokasis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getLokasi: function (req, res) {
        Lokasi.find().exec(function(err, result){
            if (err) {
                return res.notFound();
            } else {
                return res.json(result);
            } 
        })
    },
	getLokasiOnKategori: function (req, res) {
        var a = req.params.kategori;
        Lokasi.find({KATEGORI: a}).exec(function(err, result){
            if (err) {
                return res.notFound();
            } else {
                return res.json(result);
            } 
        })
    },
    getLokasiOnSubKategori: function (req, res) {
        var b = req.params.subKategori;
        console.log(b);
        Lokasi.find({SUB_KATEGORI: b}).exec(function(err, result){
            if (err) {
                return res.notFound();
            } else {
                return res.json(result);
            } 
        })
    }

};

