const express = require ("express");
const router = express.Router();

router.get("/logradouros", (req,res) =>{
    res.send("Rota de logradouros")
});

router.get("/admin/logradouros/new", (req,res) =>{
    res.send("Rota para criar um novo logradouro")
});

module.exports = router