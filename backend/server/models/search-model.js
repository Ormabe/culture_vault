'use strict';
module.exports = function(sequelize, DataTypes) {
  var Search = sequelize.define('Search', {
    search: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Search;
};
