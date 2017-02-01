'use strict';
module.exports = function(sequelize, DataTypes) {
  var Locations = sequelize.define('Locations', {
    continent: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    region: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Locations;
};