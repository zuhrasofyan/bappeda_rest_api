/**
 * Lokasi.js
 *
 * @description :: Model for table lokasi that contains all point locations
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  //use the format defined in database instead
  migrate: 'safe',

  //disable create autoCreateAt & autoUpdatedAt column in table
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    ID: {
      type: 'INTEGER',
      primaryKey: true,
      required: true,
      unique: true
    },
    KECAMATAN: {
      type: 'STRING',
      required: true
    },
    DESA: {
      type: 'STRING',
      required: true
    },
    KECAMATAN_ID: {
      type: 'INTEGER',
      required: true
    },
    DESA_ID: {
      type: 'INTEGER',
      required: true
    },
    NAMA: {
      type: 'STRING',
      required: true
    },
    LINTANG: {
      type: 'FLOAT'
    },
    BUJUR: {
      type: 'FLOAT'
    },
    KATEGORI: {
      type: 'STRING',
      required: true
    },
    SUB_KATEGORI: {
      type: 'STRING',
      required: true
    },
    ALAMAT: {
      type: 'STRING',
      required: true
    },
  }
};

