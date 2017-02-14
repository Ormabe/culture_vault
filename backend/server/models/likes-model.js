'use strict';
module.exports = function(sequelize, DataTypes) {
  var Likes = sequelize.define('Likes', {
    UserLiked:{
     type: DataTypes.BOOLEAN,
      allowNull: false, 
      defaultValue: false
    },

    counter:{
      type: DataTypes.BIGINT,
      defaultValue:0,
      validate:{
        isInt:true
      }
    }
  }, {
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