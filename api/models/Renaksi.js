/**
 * Renaksi.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	kategori: {
  		model: 'renaksiKategori'
  	},
  	tanggal: {
  		type: 'DATE'
  	},
    tahun: {
      type: 'INTEGER'
    },
  	masalah: {
  		type: 'TEXT'
  	},
  	rekomendasi: {
  		type: 'TEXT'
  	},
  	rencana_aksi: {
  		type: 'TEXT'
  	},
  	skpd: {
  		type: 'ARRAY'
  	},
  	ukuran_berhasil: {
  		type: 'TEXT'
  	},
  	target_last_year: {
  		type: 'TEXT'
  	},
  	target_this_year: {
  		type: 'TEXT'
  	},
  	status_last_year: {
  		type: 'TEXT'
  	},
		persentasi_capaian: {
			type: 'INTEGER'
		},
  	keterangan: {
  		type: 'TEXT'
  	},
    pembuat: {
      type: 'STRING'
    }
  }
};