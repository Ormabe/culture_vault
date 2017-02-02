'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      notNull: true
    },
    password: {
      type: DataTypes.STRING,
      notNull: true
    },
    email: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        isEmail: true
      }
    },
    image: DataTypes.STRING,
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