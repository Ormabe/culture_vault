'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true //notNull deprecated, use notEmpty

      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    image: {
      type:DataTypes.STRING,
      validate:{
        len:[2,1000]
      }
    },
    location: DataTypes.STRING,
    bio: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    posts: DataTypes.INTEGER,
    following: DataTypes.INTEGER,
    followers: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Users.hasMany(models.Experiences)
      }
    }
  });
  return Users;
};
