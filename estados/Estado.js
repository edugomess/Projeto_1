const Sequelize = require("sequelize");
const connection = require("../database/database");
//const Bairro = require("../bairros/Bairro");  //Tabela que tem relacão com essa


const Estado = connection.define('estados',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    
})

//Cidade.hasMany(Bairro); //Uma Cidade tem muitos artigos
//Article.belongsTo(Category); //Um Artigo pertence a uma categoria


//Estado.sync({force: true});


module.exports = Estado;