const express = require ("express");
const router = express.Router();

router.get("/bairros", (req,res) =>{
    res.send("Rota de bairros")
});

router.get("/admin/bairros/new", (req,res) =>{
    res.send("Rota para criar um novo bairro")
});

module.exports = router