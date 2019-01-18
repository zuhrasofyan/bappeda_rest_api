/**
 * SurveyJawabanController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  addJawaban: function (req, res) {
    // first, save user data
    Survey_user.create({
      nama: req.param('nama'),
      jenis_kelamin: req.param('jenisKelamin'),
      usia: req.param('usia'),
      pekerjaan: req.param('pekerjaan'),
      kecamatan_id: req.param('kecamatanId'),
      kecamatan_lat: req.param('kecamatanLat'),
      kecamatan_lng: req.param('kecamatanLng'),
      desa_id: req.param('desaId'),
      desa_lat: req.param('desaLat'),
      desa_lng: req.param('desaLng')
    }).exec(function (erroruser, user) {
      if (erroruser) {
        return res.serverError(erroruser);
      } else {
        // After user's data saved, save their answer
        var data = req.param('jawaban');
        _.each(data, function(value, key){
          Survey_pertanyaan_layak.find({id:key}).exec(function(err, resultPertanyaan){
            if (err) {
              return res.serverError(err);
            } else {
              var pertanyaan = key;
              var jawaban = value;
              Survey_jawaban_layak_huni.create({
                jawaban: jawaban,
                user: user.id,
                kategori: resultPertanyaan[0].kategori,
                pertanyaan: pertanyaan
              }).exec(function (error, res){
                if (error) {
                  return res.serverError(error);
                } else {
                  sails.log('success');
                }
              })
            }
          });
        })

        return res.ok();
      }
    })
  }

};

