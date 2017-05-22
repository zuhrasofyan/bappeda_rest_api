/**
 * Bukti_renaksi.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    renaksiId: {
      model: 'renaksi'
    },
    imageName: {
      type: 'STRING'
    },
    imageFd: {
      type: 'STRING'
    },
     toJSON: function () {
        var obj = this.toObject();
        //this will delete imageFd keyvalue from returned json
        delete obj.imageFd;
        return obj;
    }
  }
};

