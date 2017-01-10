/**
 * Kategori_lokasi.js
 *
 * @description :: Model for table kategori_lokasi
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
    NAMA_KATEGORI: {
      type: 'STRING',
      required: true
    }
  }
};

