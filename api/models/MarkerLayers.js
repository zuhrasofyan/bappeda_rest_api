/**
 * MarkerLayers.js
 *
 * @description :: Model to save marker layers
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  //use the format defined in database instead
  // migrate: 'safe',

  attributes: {

    // make reference to Layer (layer id).
    layer: {
        model: 'layers'
    },
    // the rest
    lat: {
        type: 'FLOAT'
    },
    lng: {
        type: 'FLOAT'
    },
    userId: {
        type: 'INTEGER'
    },
    pointId: {
        type: 'STRING',
        required: true,
        unique: true
    },
    message: {
        type: 'STRING'    
    },
    draggable: {
        type: 'BOOLEAN',
        defaultsTo: false   
    },
    focus: {
        type: 'BOOLEAN',
        defaultsTo: false  
    }

  },

};

