'use strict';
module.exports = function(sequelize, DataTypes) {
  var Locations = sequelize.define('Locations', {
    continent: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Locations.hasMany(models.ExperiencesLocations)
          
      }
    }
  });
  return Locations;
};