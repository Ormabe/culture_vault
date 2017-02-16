'use strict';
module.exports = function(sequelize, DataTypes) {
  var Likes = sequelize.define('Likes', {}, {
      indexes: [
    // Create a unique index on email
    {
      unique: true,
      fields: ['ExperienceId',"UserId"]
    }
    ],
    classMethods: {
      associate: function(models) {
        Likes.belongsTo(models.Users,{foreignKey: 'UserId',
        constraints: false,})
        Likes.belongsTo(models.Experiences,{foreignKey: 'ExperienceId',
        constraints: false,})
      }
    }
  });
  return Likes;
};