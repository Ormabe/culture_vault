'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define('Ingredient', {
    name: {
      type:DataTypes.STRING,
      required:true,
      validate:{
        isAlpha:true
      }
    },
    quantity: {
      type:DataTypes.BIGINT,
      allowNull:false
    },
    unit:{
      type:DataTypes.STRING,
      required:true
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Ingredient.belongsTo(models.Recipe)
      }
    }
  });
  return Ingredient;
};
