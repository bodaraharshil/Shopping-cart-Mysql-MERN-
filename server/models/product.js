
const Sequelize = require("sequelize");
const database = require("../config/db");

    const Product = database.define('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productname: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      photo:{
        type:Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      productdetail: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      }
    },
    { timestamps: false }
);

module.exports = Product;