'use strict';
module.exports = function(sequelize, DataTypes) {
  var Experiences = sequelize.define('Experiences', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fav: DataTypes.INTEGER,
    quote: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 300
      }
    },
    story: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
     {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Experiences;
};