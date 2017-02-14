'use strict';
module.exports = function(sequelize, DataTypes) {
  var Likes = sequelize.define('Likes', {}, {
     indexes: [
    {
      fields: ['UserId', 'ExperienceId']
    }
    ],
    classMethods: {
      associate: function(models) {
        Likes.belongsTo(models.Experiences)
        Likes.belongsTo(models.Users)
      }
    }
  });
  return Likes;
}; 