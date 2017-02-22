'use strict';
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

module.exports = function(sequelize, DataTypes) {
  const Users = sequelize.define('Users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
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
    posts: DataTypes.INTEGER,
    following: DataTypes.INTEGER,
    followers: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Users.hasMany(models.Experiences)
        Users.hasMany(models.Comment)
        Users.hasMany(models.Likes)

      }
    },
    instanceMethods: {
      validPassword: function(password) {
      return bcrypt.compareSync(password, this.password);
      }
    },
    hooks: {
      beforeValidate: function(user, options) {
        const SALT_FACTOR = 10;
            if (!user.changed('password')) {
              return sequelize.Promise.reject("not modified");
            }
        return bcrypt.genSaltAsync(SALT_FACTOR).then(function(salt) {
          return bcrypt.hashAsync(user.password, salt, null);
        })
        .then(function(hash) {
          user.setDataValue('password', hash);
        })
        .catch(function(err) {
          return sequelize.Promise.reject(err);
        });
      }
    }
  });
  return Users;
};
