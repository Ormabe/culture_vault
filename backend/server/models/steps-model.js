'use strict';
module.exports = function(sequelize, DataTypes) {
  var Steps = sequelize.define('Steps', {
    steps: {
        type: DataTypes.TEXT
    }
  }, {
    classMethods: {
      associate: function(models) {
        Steps.belongsTo(models.Recipes)
      }
    }
  });
  return Steps;
};


