/**
 * SurveyLayakHuniController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  addLayakHuni: function (req, res) {

    Survey_layak_huni.create({
      nama: req.param('nama'),
      jenis_kelamin: req.param('jenisKelamin'),
      usia: req.param('usia'),
      pekerjaan: req.param('pekerjaan'),
      kecamatan_id: req.param('kecamatanId'),
      kecamatan_lat: req.param('kecamatanLat'),
      kecamatan_lng: req.param('kecamatanLng'),
      desa_id: req.param('desaId'),
      desa_lat: req.param('desaLat'),
      desa_lng: req.param('desaLng'),
      aman: req.param('aman'),
      nyaman: req.param('nyaman'),
      mudah_polisi: req.param('mudahPolisi'),
      kualitas_polisi: req.param('kualitasPolisi'),
      unjuk_rasa: req.param('unjukRasa'), 
      bebas_pendapat: req.param('bebasPendapat'), 
      aman_bencana: req.param('amanBencana'), 
      peringatan_dini: req.param('peringatanDini'), 
      sehat_lingkungan: req.param('sehatLingkungan'), 
      penyakit_menular: req.param('penyakitMenular'), 
      layanan_kesehatan: req.param('layananKesehatan'), 
      kualitas_layanan_kesehatan: req.param('kualitasLayananKesehatan'), 
      kebersihan_udara: req.param('kebersihanUdara'), 
      kebersihan_sungai: req.param('kebersihanSungai'), 
      kebersihan_jalan: req.param('kebersihanJalan'), 
      layanan_sampah: req.param('layananSampah'), 
      mudah_kerja: req.param('mudahKerja'), 
      pengembangan_usaha: req.param('pengembanganUsaha'), 
      biaya_hidup: req.param('biayaHidup'), 
      pasar_tradisional: req.param('pasarTradisional'), 
      penataan_pkl: req.param('penataanPKL'), 
      ojek: req.param('ojek'), 
      mudah_sembako: req.param('mudahSembako'), 
      nutrisi: req.param('nutrisi'), 
      informasi_pembangunan: req.param('informasiPembangunan'), 
      terlibat_pembangunan: req.param('terlibatPembangunan'), 
      memiliki_rumah: req.param('memilikiRumah'), 
      fisik_rumah: req.param('fisikRumah'), 
      pelayanan_pendidikan: req.param('pelayananPendidikan'), 
      kualitas_pendidikan: req.param('kualitasPendidikan'), 
      pelayanan_administrasi: req.param('pelayananAdministrasi'), 
      kualitas_administrasi: req.param('kualitasAdministrasi'), 
      kemudahan_taman_kota: req.param('kemudahanTamanKota'), 
      kualitas_taman_kota: req.param('kualitasTamanKota'), 
      difabel_taman_kota: req.param('difabelTamanKota'), 
      kemudahan_olahraga: req.param('kemudahanOlahraga'), 
      kemudahan_kesenian_budaya: req.param('kemudahanKesenianBudaya'), 
      kualitas_kesenian_budaya: req.param('kualitasKesenianBudaya'), 
      frekuensi_festival_budaya: req.param('frekuensiFestivalBudaya'), 
      kemudahan_wisata: req.param('kemudahanWisata'), 
      kualitas_wisata: req.param('kualitasWisata'), 
      fasilitas_hiburan: req.param('fasilitasHiburan'), 
      kualitas_hiburan: req.param('kualitasHiburan'), 
      kualitas_jalur_pejalan_kaki: req.param('kualitasJalurPejalanKaki'), 
      difabel_pejalan_kaki: req.param('difabelPejalanKaki'), 
      kemacetan: req.param('kemacetan'), 
      resiko_kecelakaan_lantas: req.param('resikoKecelakaanLantas'), 
      kualitas_jalan_kota: req.param('kualitasJalanKota'), 
      kualitas_angkutan_umum: req.param('kualitasAngkutanUmum'), 
      info_angkutan_umum: req.param('infoAngkutanUmum'), 
      mencapai_tujuan: req.param('mencapaiTujuan'), 
      air_bersih: req.param('airBersih'), 
      kualitas_drainase: req.param('kualitasDrainase'), 
      kualitas_sinyal: req.param('kualitasSinyal'), 
      internet_seluler: req.param('internetSeluler'), 
      kualitas_listrik: req.param('kualitasListrik'), 
      kualitas_tata_kota: req.param('kualitasTataKota'), 
      suhu_kota: req.param('suhuKota'), 
      toleransi_masyarakat: req.param('toleransiMasyarakat'), 
      transparansi_pemerintah: req.param('transparansiPemerintah')
    }).exec(function(err, result){
			if (err) {
				return res.serverError(err);
			} else {
				return res.ok();
			}
		});
  }
};

