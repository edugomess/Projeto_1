const Sequelize = require("sequelize");
const connection = require("../database/database");
//const Bairro = require("../bairros/Bairro");  //Tabela que tem relacão com essa


const Bairro = connection.define('bairros',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

//Cidade.hasMany(Bairro); //Uma Cidade tem muitos artigos
//Article.belongsTo(Category); //Um Artigo pertence a uma categoria


//Bairro.sync({force: true});


module.exports = Bairro;