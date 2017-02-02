'use strict';
module.exports = function(sequelize, DataTypes) {
  var Experiences = sequelize.define('Experiences', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fav: DataTypes.INTEGER,
    
    quote: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[2,250]
      }
    },

    story: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    
    image: {
      type: DataTypes.STRING,
      allowNull: false
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