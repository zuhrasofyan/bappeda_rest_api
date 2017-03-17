/**
 * RenaksiController
 *
 * @description :: Server-side logic for managing Renaksis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addRenaksi: function (req, res) {
		var judul = req.param('judul'), 
			tanggal = req.param('tanggal'),
			masalah = req.param('masalah'),
			rekomendasi = req.param('rekomendasi'),
			rencanaAksi = req.param('rencanaAksi'),
			selectedSkpd = req.param('selectedSkpd'),
			ukuranBerhasil = req.param('ukuranBerhasil'),
			targetLastYear = req.param('targetLastYear'),
			targetThisYear = req.param('targetThisYear'),
			statusLastYear = req.param('statusLastYear'),
			keterangan = req.param('keterangan');

		Renaksi.create({
			judul: judul,
			tanggal: tanggal,
			masalah: masalah,
			rekomendasi: rekomendasi,
			rencana_aksi: rencanaAksi,
			skpd: selectedSkpd,
			ukuran_berhasil: ukuranBerhasil,
			target_last_year: targetLastYear,
			target_this_year: targetThisYear,
			status_last_year: statusLastYear,
			keterangan: keterangan
		}). exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.ok();
			}
		})
	}
};
