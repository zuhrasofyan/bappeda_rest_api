/**
 * Dasar_desa.js
 *
 * @description :: Model for table dasar_desa.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //use the format defined in database instead
  migrate: 'safe',

  //disable create autoCreateAt & autoUpdatedAt column in table
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    DESA_ID: {
      type: 'INTEGER',
      primaryKey: true,
      required: true,
      unique: true
    },
    PROVINSI_ID: {
      type: 'INTEGER',
      required: true
    },
    KAB_ID: {
      type: 'INTEGER',
      required: true
    },
    KECAMATAN_ID: {
      type: 'INTEGER',
      required: true
    },
    NAMA: {
      type: 'STRING',
      required: true
    },
    KELILING_M2: {
      type: 'FLOAT'
    },
    LUAS_M2: {
      type: 'FLOAT'
    },
    LINTANG: {
      type: 'FLOAT'
    },
    BUJUR: {
      type: 'FLOAT'
    },

    // Add reference ke kecamatan
    kecamatan: {
      model: 'kecamatan',
      columnName: 'KECAMATAN_ID'
    }
  }
};

