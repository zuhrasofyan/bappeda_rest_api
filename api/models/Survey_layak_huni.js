/**
 * SurveyLayakHuni.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  //use the format defined in database instead
  migrate: 'safe',

  attributes: {

    // DATA RESPONDEN
    nama: {
      type: 'STRING',
      required: true
    },
    jenis_kelamin: {
      type: 'STRING',
      required: true
    },
    usia: {
      type: 'INTEGER',
      required: true
    },
    pekerjaan: {
      type: 'STRING',
      required: true
    },
    kecamatan_id: {
      type: 'INTEGER',
      required: true
    },
    kecamatan_lat: {
      type: 'FLOAT',
      required: true
    },
    kecamatan_lng: {
      type: 'FLOAT',
      required: true
    },
    desa_id: {
      type: 'INTEGER',
      required: true
    },
    desa_lat: {
      type: 'FLOAT',
      required: true
    },
    desa_lng: {
      type: 'FLOAT',
      required: true
    },
    // ***********
    // DATA SURVEY
    // ***********
    // Kemananan Kota
    aman: {
      type: 'INTEGER',
      defaultsTo: null
    },
    nyaman: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Fasilitas keamanan
    mudah_polisi: {
      type: 'INTEGER',
      defaultsTo: null
    },
    kualitas_polisi: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Politik Kota
    unjuk_rasa: {
      type: 'INTEGER',
      defaultsTo: null
    },
    bebas_pendapat: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Mitigasi Bencana
    aman_bencana: {
      type: 'INTEGER',
      defaultsTo: null
    },
    peringatan_dini: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Kesehatan Kota
    sehat_lingkungan: {
      type: 'INTEGER',
      defaultsTo: null
    },
    penyakit_menular: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Fasilitas Kesehatan
    layanan_kesehatan: {
      type: 'INTEGER',
      defaultsTo: null
    },
    kualitas_layanan_kesehatan: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Kebersihan Kota
    kebersihan_udara: {
      type: 'INTEGER',
      defaultsTo: null
    },
    kebersihan_sungai: {
      type: 'INTEGER',
      defaultsTo: null
    },
    kebersihan_jalan: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Persampahan
    layanan_sampah: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Perekonomian Kota
    mudah_kerja: {
      type: 'INTEGER',
      defaultsTo: null
    },
    pengembangan_usaha: {
      type: 'INTEGER',
      defaultsTo: null
    },
    biaya_hidup: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Fasilitas Ekonomi
    pasar_tradisional: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Sektor Informal Kota
    penataan_pkl: {
      type: 'INTEGER',
      defaultsTo: null
    },
    ojek: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Ketercukupan Pangan
    mudah_sembako: {
      type: 'INTEGER',
      defaultsTo: null
    },
    nutrisi: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Informasi Pembangunan dan Partisipasi Masyarakat
    informasi_pembangunan: {
      type: 'INTEGER',
      defaultsTo: null
    },
    terlibat_pembangunan: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Perumahan
    memiliki_rumah: {
      type: 'INTEGER',
      defaultsTo: null
    },
    fisik_rumah: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Fasilitas Pendidikan
    pelayanan_pendidikan: {
      type: 'INTEGER',
      defaultsTo: null
    },
    kualitas_pendidikan: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Fasilitas Administrasi Pemerintahan dan Pelayanan Publik
    pelayanan_administrasi: {
      type: 'INTEGER',
      defaultsTo: null
    },
    kualitas_administrasi: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Fasilitas Peribadatan/ Pelayanan Keagamaan
    kualitas_layanan_agama: {
      type: 'INTEGER',
      defaultsTo: null
    },
    kebersihan_fasilitas_agama: {
      type: 'INTEGER',
      defaultsTo: null
    },

    // Fasilitas Taman Kota
    kemudahan_taman_kota: {
      type: 'INTEGER',
      defaultsTo: null
    },
    kualitas_taman_kota: {
      type: 'INTEGER',
      defaultsTo: null
    },
    difabel_taman_kota: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Fasilitas Olahraga
    kemudahan_olahraga: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Fasilitas Kesenian dan Budaya
    kemudahan_kesenian_budaya: {
      type: 'INTEGER',
      defaultsTo: null
    },
    kualitas_kesenian_budaya: {
      type: 'INTEGER',
      defaultsTo: null
    },
    frekuensi_festival_budaya: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Fasilitas wisata
    kemudahan_wisata: {
      type: 'INTEGER',
      defaultsTo: null
    },
    kualitas_wisata: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Akses Terhadap Rekreasi dan Hiburan
    fasilitas_hiburan: {
      type: 'INTEGER',
      defaultsTo: null
    },
    kualitas_hiburan: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Fasilitas Pejalan Kaki
    kualitas_jalur_pejalan_kaki: {
      type: 'INTEGER',
      defaultsTo: null
    },
    difabel_pejalan_kaki: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Transportasi
    kemacetan: {
      type: 'INTEGER',
      defaultsTo: null
    },
    resiko_kecelakaan_lantas: {
      type: 'INTEGER',
      defaultsTo: null
    },
    kualitas_jalan_kota: {
      type: 'INTEGER',
      defaultsTo: null
    },
    kualitas_angkutan_umum: {
      type: 'INTEGER',
      defaultsTo: null
    },
    info_angkutan_umum: {
      type: 'INTEGER',
      defaultsTo: null
    },
    mencapai_tujuan: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Pengelolaan air bersih
    air_bersih: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Pengelolaan air kotor dan drainase
    kualitas_drainase: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Jaringan Telekomunikasi
    kualitas_sinyal: {
      type: 'INTEGER',
      defaultsTo: null
    },
    internet_seluler: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Kelistrikan
    kualitas_listrik: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Penataan Kota
    kualitas_tata_kota: {
      type: 'INTEGER',
      defaultsTo: null
    },
    suhu_kota: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Toleransi
    toleransi_masyarakat: {
      type: 'INTEGER',
      defaultsTo: null
    },
    // Transparansi
    transparansi_pemerintah: {
      type: 'INTEGER',
      defaultsTo: null
    }

  },

};

