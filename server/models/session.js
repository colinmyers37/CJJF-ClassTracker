const { DataTypes } = require("sequelize");

const { sequelize } = require("../database/sequelize");

module.exports = {
  Session: sequelize.define("session", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  }),
};
