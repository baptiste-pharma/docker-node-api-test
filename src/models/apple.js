const { DataTypes } = require('sequelize');
const sequelize = require('../services/sequelize');


const Apples = sequelize.define('Apples', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  variety: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false,
});

module.exports = Apples;