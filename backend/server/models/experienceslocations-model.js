'use strict';
module.exports = function(sequelize, DataTypes) {
  var ExperiencesLocations = sequelize.define('ExperiencesLocations', {},{
    classMethods: {
      associate: function(models) {
        ExperiencesLocations.belongsTo(models.Experiences)
        ExperiencesLocations.belongsTo(models.Locations)
      }
    }
  });
  return ExperiencesLocations;
};