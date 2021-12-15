const Sequelize = require("sequelize");
const connection = require("../database/database");
//const Bairro = require("../bairros/Bairro");  //Tabela que tem relacão com essa


const Usuario = connection.define('usuarios',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CPF: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_de_nascimento: {
        type: Sequelize.DATE,
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
    },
   senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    confirmacao_de_senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sexo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    situacao: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

//Cidade.hasMany(Bairro); //Uma Cidade tem muitos artigos
//Article.belongsTo(Category); //Um Artigo pertence a uma categoria


//Usuario.sync({force: true});


module.exports = Usuario;