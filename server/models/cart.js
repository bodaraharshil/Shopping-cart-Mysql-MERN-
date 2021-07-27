
const Sequelize = require("sequelize");
const database = require("../config/db");

    const Product = database.define('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      }
    },
    { timestamps: false }
);

module.exports = Product;