const Sequelize = require("sequelize");
const connection = require("../database/database");
//const Bairro = require("../bairros/Bairro");  //Tabela que tem relacão com essa


const Fornecedor = connection.define('fornecedores',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    CNPJ: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    número: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    }
   
})

//Cidade.hasMany(Bairro); //Uma Cidade tem muitos artigos
//Article.belongsTo(Category); //Um Artigo pertence a uma categoria


//Fornecedor.sync({force: true});


module.exports = Fornecedor;