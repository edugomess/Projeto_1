const express = require ("express");
const router = express.Router();

router.get("/fornecedores", (req,res) =>{
    res.send("Rota de fornecedores")
});

router.get("/admin/fornecedores/new", (req,res) =>{
    res.send("Rota para criar um novo fornecedor")
});

module.exports = router