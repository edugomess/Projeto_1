const Sequelize = require("sequelize");
const connection = require("../database/database");
//const Bairro = require("../bairros/Bairro");  //Tabela que tem relacão com essa


const Produto = connection.define('produtos',{
    categoria:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fabricante: {
        type: Sequelize.STRING,
        allowNull: false
    },
    modelo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    observacoes: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
})

//Cidade.hasMany(Bairro); //Uma Cidade tem muitos artigos
//Article.belongsTo(Category); //Um Artigo pertence a uma categoria


//Produto.sync({force: true});


module.exports = Produto;