const express = require ("express");
const router = express.Router();

router.get("/senhas", (req,res) =>{
    res.send("Rota de senhas")
});

router.get("/admin/senhas/new", (req,res) =>{
    res.send("Rota para criar um novo senha")
});

module.exports = router