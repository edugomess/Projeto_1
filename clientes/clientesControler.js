const express = require ("express");
const router = express.Router();

router.get("/clientes", (req,res) =>{
    res.send("Rota de clientes")
});

router.get("/admin/clientes/new", (req,res) =>{
    res.send("Rota para criar um novo cliente")
});

module.exports = router