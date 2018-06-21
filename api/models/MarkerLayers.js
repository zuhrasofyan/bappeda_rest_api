/**
 * MarkerLayers.js
 *
 * @description :: Model to save marker layers
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    // make reference to Layer (layer id), but since laeflet use string as layer name, then we store the id as string.
    layer: {
        type: 'STRING'
    },

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

