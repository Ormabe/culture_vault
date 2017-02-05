'use strict';
module.exports = function(sequelize, DataTypes) {
  var Experiences = sequelize.define('Experiences', {
    name: DataTypes.STRING,

    fav: DataTypes.INTEGER,

    quote: {
      type:DataTypes.STRING(2000)
    },

    story: {
      type:DataTypes.STRING(2000)
    },

    image: {
      type:DataTypes.STRING(2000)
    }
  },
    {
    classMethods: {
      associate: function(models) {
        Experiences.belongsTo(models.Users)
        Experiences.hasMany(models.ExperiencesLocations)
        Experiences.hasMany(models.Recipes)
      }
    }
  });
  return Experiences;
};