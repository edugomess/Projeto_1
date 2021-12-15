const express = require ("express");
const router = express.Router();

router.get("/produtos", (req,res) =>{
    res.send("Rota de produtos")
});

router.get("/admin/produtos/new", (req,res) =>{
    res.send("Rota para criar um novo produto")
});

module.exports = router