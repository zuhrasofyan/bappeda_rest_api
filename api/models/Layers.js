/**
 * Layers.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
        type: 'STRING'
    },
    userId: {
        type: 'INTEGER'
    },
    // should be used for leaflet type
    'type': {
        type: 'STRING',
        defaultsTo: 'group'
    },
    visible: {
        type: 'BOOLEAN',
        defaultsTo: true
    },
    layerParams: {
        type: 'JSON',
        defaultsTo: {
            showOnSelector: true
        }
    },
    status: {
      type: 'STRING',
      defaultsTo: 'draft'
    },
    isDeleted: {
      type: 'BOOLEAN',
      defaultsTo: false
    },

    // Add a reference to markers in MarkerLayers model
    markers: {
      collection: 'markerlayers',
      via: 'layer'
    }

  },

};

