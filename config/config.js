require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'todo4',
    host: 'host.docker.internal',
    dialect: "mysql",
    port: 3306,
    seederStorage: "sequelize"
  },
  test: {
    username: 'root',
    password: 'password',
    database: process.env.MYSQL_DBNAME,
    host: 'host.docker.internal',
    dialect: "mysql",
    port: 3306
  },
  production: {
    username: 'root',
    password: 'password',
    database: process.env.MYSQL_DBNAME,
    host: 'host.docker.internal',
    dialect: "mysql",
    port: 3306
  }
}
