/**
 * SurveyUser.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    // DATA RESPONDEN
    nama: {
      type: 'STRING',
      required: true
    },
    jenis_kelamin: {
      type: 'STRING',
      required: true
    },
    usia: {
      type: 'INTEGER',
      required: true
    },
    pekerjaan: {
      type: 'STRING',
      required: true
    },
    kecamatan_id: {
      type: 'INTEGER',
      required: true
    },
    kecamatan_lat: {
      type: 'FLOAT',
      required: true
    },
    kecamatan_lng: {
      type: 'FLOAT',
      required: true
    },
    desa_id: {
      type: 'INTEGER',
      required: true
    },
    desa_lat: {
      type: 'FLOAT',
      required: true
    },
    desa_lng: {
      type: 'FLOAT',
      required: true
    },

    // add reference to pertanyaan
    jawabs: {
      collection: 'survey_jawaban_layak_huni',
      via: 'user'
    }

  },

};

