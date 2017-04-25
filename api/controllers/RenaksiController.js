/**
 * RenaksiController
 *
 * @description :: Server-side logic for managing Renaksis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addRenaksi: function (req, res) {
		var nomor = req.param('nomor'),
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
			persentasiCapaian = req.param('persentasiCapaian'),
			keterangan = req.param('keterangan'),
			pembuat = req.param('pembuat');

		Renaksi.create({
			kategori: nomor,
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
			persentasi_capaian: persentasiCapaian,
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

	editRenaksi: function (req, res) {
		var id = req.param('id'),
			kategori = req.param('kategori'),
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
			persentasiCapaian = req.param('persentasiCapaian'),
			keterangan = req.param('keterangan');
		var renaksi = {
			kategori: kategori,
			tanggal: tanggal,
			tahun: tahun,
			masalah: masalah,
			rencana_aksi: rencanaAksi,
			skpd: selectedSkpd,
			ukuran_berhasil: ukuranBerhasil,
			target_last_year: targetLastYear,
			target_this_year: targetThisYear,
			status_last_year: statusLastYear,
			persentasi_capaian: persentasiCapaian,
			keterangan: keterangan,
		};
		Renaksi.update({id:id}, renaksi).exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.ok();
			}
		});
	},

	getRadDataTahunan: function (req, res) {
		var tahun = req.param('tahun');
		RenaksiKategori.find().populate('renaksi', {where: {tahun:tahun}}).exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.json(result);
			}
		});
	},

	getRadKategori: function(req, res) {
		RenaksiKategori.find().exec(function(err, katResult){
			if (err) {
				return res.serverError(err);
			} else {
				return res.json(katResult);
			}
		});
	}

};
