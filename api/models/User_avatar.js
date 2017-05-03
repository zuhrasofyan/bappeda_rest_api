/**
 * User_avatar.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    userId: {
      model: 'user',
      unique: true
    },
    avatarUrl: {
        type: 'STRING'
    },
    avatarFd: {
        type: 'STRING'
    },
  }
};

