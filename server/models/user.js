const { DataTypes } = require("sequelize");

const { sequelize } = require("../database/sequelize");

module.exports = {
  User: sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hashed_pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }),
};
