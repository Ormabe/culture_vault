'use strict';
module.exports = function(sequelize, DataTypes) {
  var Experience = sequelize.define('Experience', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Experience;
};