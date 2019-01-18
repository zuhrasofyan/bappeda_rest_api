/**
 * SurveyPertanyaanLayak.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  //use the format defined in database instead
  // migrate: 'safe',

  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    // kategori: {
    //   type: 'INTEGER',
    // },
    nama: {
      type: 'STRING'
    },

    // get reference from Kategori
    kategori: {
      model: 'survey_kategori',
    },

    // add reference to jawaban
    pertanyaans: {
      collection: 'survey_jawaban_layak_huni',
      via: 'pertanyaan'
    }
  },

};

