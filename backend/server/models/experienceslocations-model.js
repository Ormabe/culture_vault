'use strict';
module.exports = function(sequelize, DataTypes) {
  var ExperiencesLocations = sequelize.define('ExperiencesLocations', {},{
    classMethods: {
      associate: function(models) {
        ExperiencesLocations.belongsTo(models.Experiences,{foreignKey: 'ExperienceId',
        constraints: false})
        ExperiencesLocations.belongsTo(models.Locations,{foreignKey: 'LocationId',
        constraints: false})
      }
    }
  });
  return ExperiencesLocations;
};