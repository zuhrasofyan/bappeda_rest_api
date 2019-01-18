/**
 * PertanyaanSurveyLayakController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  getPertanyaanKategori: function (req, res) {
    Survey_kategori.find().populate('pertanyaans').exec(function(err, result){
      if (err) {
          return res.notFound();
      } else {
          return res.json(result);
      }
    });
  }

};

