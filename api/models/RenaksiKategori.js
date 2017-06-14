/**
 * RenaksiKategori.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	nomor: {
  		type: 'INTEGER',
  		primaryKey: true,
  		unique: true
  	},
  	kategori: {
  		type: 'STRING',
      required: true
  	},
    renaksi: {
      collection: 'renaksi',
      via: 'kategori'
    }

  },
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false

};
