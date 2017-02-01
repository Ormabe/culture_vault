'use strict';
module.exports = function(sequelize, DataTypes) {
  var Experiences = sequelize.define('Experiences', {
    name: DataTypes.STRING,
    fav: DataTypes.INTEGER,
    quote: DataTypes.STRING,
    story: DataTypes.BLOB,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Experiences;
};