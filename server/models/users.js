
const Sequelize = require("sequelize");
const database = require("../config/db");

    const User = database.define('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      photo:{
        type:Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      status:{
        type:Sequelize.INTEGER(11),
        define:0
      }
      
    },
    { timestamps: false }
);

module.exports = User;