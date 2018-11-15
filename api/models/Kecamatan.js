/**
 * Kecamatan.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  //use the format defined in database instead
  migrate: 'safe',

  //disable create autoCreateAt & autoUpdatedAt column in table
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    ID_Kecamatan: {
      type: 'INTEGER',
      primaryKey: true,
      required: true,
      unique: true
    },
    Nama_Kecamatan: {
      type: 'STRING',
      required: true
    },
    Lintang: {
      type: 'FLOAT'
    },
    Bujur: {
      type: 'FLOAT'
    }
  },

};

