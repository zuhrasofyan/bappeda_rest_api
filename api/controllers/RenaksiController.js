/**
 * RenaksiController
 *
 * @description :: Server-side logic for managing Renaksis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addRenaksi: function (req, res) {
		var kategori = req.param('kategori'),
			tanggal = req.param('tanggal'),
			tahun = req.param('tahun'),
			masalah = req.param('masalah'),
			rekomendasi = req.param('rekomendasi'),
			rencanaAksi = req.param('rencanaAksi'),
			selectedSkpd = req.param('selectedSkpd'),
			ukuranBerhasil = req.param('ukuranBerhasil'),
			targetLastYear = req.param('targetLastYear'),
			targetThisYear = req.param('targetThisYear'),
			statusLastYear = req.param('statusLastYear'),
			keterangan = req.param('keterangan'),
			pembuat = req.param('pembuat');

		Renaksi.create({
			kategori: kategori,
			tanggal: tanggal,
			tahun: tahun,
			masalah: masalah,
			rekomendasi: rekomendasi,
			rencana_aksi: rencanaAksi,
			skpd: selectedSkpd,
			ukuran_berhasil: ukuranBerhasil,
			target_last_year: targetLastYear,
			target_this_year: targetThisYear,
			status_last_year: statusLastYear,
			keterangan: keterangan,
			pembuat: pembuat
		}). exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.ok();
			}
		});
	},

	getRadDataTahunan: function (req, res) {
		var tahun = req.param('tahun');
		Renaksi.find({tahun: tahun}).exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.json(result);
			}
		});
	}
	
};
