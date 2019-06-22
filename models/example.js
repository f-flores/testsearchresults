// ==================================================
//
// File name: example.js
// Description: sequelize model example
//
// ==================================================

module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};
