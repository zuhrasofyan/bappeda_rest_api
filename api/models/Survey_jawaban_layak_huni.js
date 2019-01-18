/**
 * SurveyJawaban.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  //disable create autoUpdatedAt column in table
  autoUpdatedAt: false,

  attributes: {

    // Pertanyaan_id, jawaban, user_id, kategori_id
    jawaban: {
      type: 'INTEGER',
      defaultsTo: null
    },

    // get reference from user (id)
    user: {
      model: 'survey_user',
    },

    // get reference from kategori (id)
    kategori: {
      model: 'survey_kategori',
    },

    // get reference from pertanyaan (id)
    pertanyaan: {
      model: 'survey_pertanyaan_layak',
    }

  },

};

