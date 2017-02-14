'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define('Recipes', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [2,50]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Recipes.hasMany(models.Steps)
        Recipes.hasMany(models.Ingredients)
        Recipes.belongsTo(models.Experiences,{foreignKey: 'ExperienceId',
        constraints: false})
      }
    }
  });
  return Recipes;
};
