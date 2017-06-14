/**
 * Rad_year.js
 *
 * @description :: Model to store years of RAD. can be connected with one to many relationship to Renaksi model
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    tahun: {
      type: 'INTEGER',
      primaryKey: true,
  		unique: true,
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

