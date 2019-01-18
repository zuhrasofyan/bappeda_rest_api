/**
 * Survey_kategori.js
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

    nama_kategori: {
      type: 'STRING',
      required: true
    },

    // add reference to pertanyaan
    pertanyaans: {
      collection: 'survey_pertanyaan_layak',
      via: 'kategori'
    },

    // add reference to jawaban
    jawabans: {
      collection: 'survey_jawaban_layak_huni',
      via: 'kategori'
    }

  },

};

