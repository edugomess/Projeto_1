const express = require ("express");
const app = express();
const bodyparser = require("body-parser");
const connection = require("./database/database");

const categoriesControler = require("./categories/categoriesControler");
const articlesControler = require("./articles/articlesControler");
const bairrosControler = require("./bairros/bairrosControler");
const cargosControler = require("./cargos/Cargo");
const cidadesControler = require("./cidades/Cidade");
const clientesControler = require("./clientes/Cliente");
const comprasControler = require("./compras/Compra");
const dashboardControler = require("./dashboard/Dashboard");
const estadosControler = require("./estados/Estado");
const fornecedoresControler = require("./fornecedores/Fornecedor");
const loginControler = require("./login/Login");
const logradourosControler = require("./logradouros/Logradouro");
const pagamentosControler = require("./pagamentos/Pagamento");
const produtosControler = require("./produtos/Produto");
const senhasControler = require("./senhas/Senha");
const usuariosControler = require("./usuarios/Usuario");


const Article = require("./articles/Article");
const Category = require("./categories/Category");
const Bairro = require("./bairros/Bairro");
const Cargo = require("./cargos/Cargo");
const Cidade = require("./cidades/Cidade");
const Cliente = require("./clientes/Cliente");
const Compra = require("./compras/Compra");
const Dashboard = require("./dashboard/Dashboard");
const Estado = require("./estados/Estado");
const Fornecedor = require("./fornecedores/Fornecedor");
const Login = require("./login/Login");
const Logradouro = require("./logradouros/Logradouro");
const Pagamento = require("./pagamentos/Pagamento");
const Produto = require("./produtos/Produto");
const Senha = require("./senhas/Senha");
const Usuario = require("./usuarios/Usuario");

// View engine
app.set('view engine', 'ejs');


//Static
app.use(express.static('public'));


//Body parser
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão com banco de dados feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })


app.use("/",categoriesControler);
app.use("/",articlesControler);
app.use("/",bairrosControler);


app.get("/", (req,res) => {
    res.render("index");
})


app.listen(8080, () => {
    console.log("O Servidor Está Rodando!")
})