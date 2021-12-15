const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");


const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article); //Uma categoria tem muitos artigos
Article.belongsTo(Category); //Um Artigo pertence a uma categoria


//Article.sync({force: true});


module.exports = Article;