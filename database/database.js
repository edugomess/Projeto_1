const Sequelize = require("sequelize");

const connection = new Sequelize('db_autopecas','root','31762004801EDUg',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
