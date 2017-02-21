'use strict';
module.exports = function(sequelize, DataTypes) {
  var Session = sequelize.define('Session', {
    sid: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    userId: DataTypes.STRING,
    expires: DataTypes.DATE,
    data: DataTypes.STRING(50000)
  }, {
    classMethods: {
      associate: function(models) {

      }
    },
    instanceMethods: {
      extendDefaultFields: function ( defaults, session) {
        return {
          data: defaults.data,
          expires: defaults.expires,
          userId: (session.passport && session.passport['user']) ? session.passport['user'] : null
        };
      }
    }
  });
  return Session;
};
