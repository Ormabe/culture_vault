'use strict';
module.exports = function(sequelize, DataTypes) {
  var Steps = sequelize.define('Steps', {
    steps: {
        type: DataTypes.BLOB
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
