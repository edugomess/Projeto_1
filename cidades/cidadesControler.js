const express = require ("express");
const router = express.Router();

router.get("/cidades", (req,res) =>{
    res.send("Rota de cidades")
});

router.get("/admin/cidades/new", (req,res) =>{
    res.send("Rota para criar um novo cidade")
});

module.exports = router