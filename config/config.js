require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: "newlife4829",
    database: 'book1',
    port: 3306,
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 'false',
  },
  production: {
    username: 'root',
    database: 'resurrection-homepage',
    port: 3306,
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 'false',
    logging: false,
  },
};

