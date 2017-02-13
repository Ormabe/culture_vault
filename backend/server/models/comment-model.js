'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    comment: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.Users)
        Comment.belongsTo(models.Experiences)
      }
    }
  });
  return Comment;
};
