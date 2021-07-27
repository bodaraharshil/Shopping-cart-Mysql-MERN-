
const Sequelize = require("sequelize");
const config = require('./config');

const dbObj = new Sequelize(config.Mysql_database, config.Mysql_username, config.Mysql_password, {
  host: config.Mysql_host,
  dialect: 'mysql',
  logging: false,
  pool: {
      max: 7,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
});

dbObj.authenticate().then(()=>{
    console.log('Database Connection has been established successfully with MySQL.');
}).catch(error => {
  console.log(error);
    console.log('Unable to connect to the database:', error.message || error);
});

module.exports = dbObj;
