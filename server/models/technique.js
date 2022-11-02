const { DataTypes } = require("sequelize");

const { sequelize } = require("../database/sequelize");

module.exports = {
  Technique: sequelize.define("technique", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }),
};
