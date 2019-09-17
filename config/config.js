require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.SEQUELIZE_DEV_PW,
    database: 'book1',
    port: 3306,
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 'false',
  },
  production: {
    username: 'root',
    database: 'resurrection-homepage',
    password: process.env.SEQUELIZE_PRO_PW,
    port: 3306,
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 'false',
    logging: false,
  },
};

