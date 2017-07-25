/**
 * TempUser.js
 *
 * @description :: This is a model to store temporary user link before user being activated
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    email: {
        type: 'STRING'
    },
    verificationNumber: {
        type: 'STRING'
    },
  }
};