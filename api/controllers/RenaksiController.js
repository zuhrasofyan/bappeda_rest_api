/**
 * RenaksiController
 *
 * @description :: Server-side logic for managing Renaksis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var path = require('path');

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

	// list of renaksi based on category
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

	// list of renaksi based on year
	getRadDataTahun: function (req, res) {
		var tahun = req.param('tahun');
		Rad_year.find({tahun:tahun}).populate('renaksi').exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.json(result);
			}
		})
	},

	getRadTahun: function(req, res) {
		Rad_year.find().exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.json(result);
			}
		})
	},

	getRadKategori: function(req, res) {
		RenaksiKategori.find().exec(function(err, katResult){
			if (err) {
				return res.serverError(err);
			} else {
				return res.json(katResult);
			}
		});
	},

	uploadBuktiRad: function(req, res) {
		var renaksiId = req.param('id');
		var	filename = req.file('image')._files[0].stream.filename;
		
		// extract extension
		var extension = filename.substr(filename.lastIndexOf('.')+1).toLowerCase().toString();

		// if extension of uploaded image is not jpg or png, response with error
		if ((extension != "jpg") && (extension != "jpeg") && (extension != "png")) {
			return res.badRequest('Format gambar yang diperbolehkan adalah jpeg, jpg atau png');
		} else {
			var folderPath = 'assets/images/bukti';
			req.file('image').upload({
				// max file size ~1MB
				maxBytes: 1000000,
				// Set custom upload dir path name
				dirname: path.resolve(sails.config.appPath, folderPath)
			}, function whenDone(err, uploadedFile){
				if (err) {
					return res.negotiate(err);
				}
				if (uploadedFile.length === 0) {
					return res.badRequest('Tidak ada file bukti yang diupload');
				} else {
					Bukti_renaksi.create({
						renaksiId: renaksiId,
						imageName: path.basename(uploadedFile[0].fd),
						imageFd: uploadedFile[0].fd
					})
					.exec(function(err, result){
						if (err) {
							return res.serverError(err);
						} else {
							return res.ok('Gambar bukti telah disimpan.');
						}
					})

				}
			})
		}
	},

	getListImageBukti: function(req, res) {
		var renaksiId = req.param('id');
		Bukti_renaksi.find({renaksiId:renaksiId}).exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.json(result);
			}
		})
	},

	getImageBukti: function(req, res){
		var imageName = req.param('imageName');
		Bukti_renaksi.findOne({imageName:imageName}).exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
            	if (!result) {return res.notFound('bukti tidak dapat ditemukan');}
				var SkipperDisk = require('skipper-disk');
            	var fileAdapter = SkipperDisk(/* optional opts */);

				// Stream the file down
				fileAdapter.read(result.imageFd)
				.on('error', function (err){
					return res.serverError(err);
				})
				.pipe(res);
			}
		})
	}

};
