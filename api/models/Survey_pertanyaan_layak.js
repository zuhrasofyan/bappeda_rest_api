/**
 * SurveyPertanyaanLayak.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  //use the format defined in database instead
  migrate: 'safe',

  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    kategori: {
      type: 'INTEGER',
    },
    pertanyaan: {
      type: 'STRING'
    },

    // add reference to Kategori
    kategoris: {
      model: 'survey_kategori',
      columnName: 'kategori'
    }
  },

};

