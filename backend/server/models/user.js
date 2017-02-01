'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};