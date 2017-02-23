'use strict';
module.exports = function(sequelize, DataTypes) {
  var Experiences = sequelize.define('Experiences', {
    name: DataTypes.STRING,

    fav: DataTypes.INTEGER,

    quote: {
      type:DataTypes.STRING(2000)
    },

    story: {
      type:DataTypes.STRING(50000)
    },

    image: {
      type:DataTypes.STRING(2000)
    }
    ,

    music: {
      type:DataTypes.STRING(2000)
    }
  },
    {
    classMethods: {
      associate: function(models) {
        Experiences.belongsTo(models.Users)
        Experiences.hasMany(models.ExperiencesLocations)
        Experiences.hasMany(models.Recipes)
        Experiences.hasMany(models.Comment)
        Experiences.hasMany(models.Likes)
      }
    }
  });
  return Experiences;
};