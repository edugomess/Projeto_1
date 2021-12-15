const express = require ("express");
const router = express.Router();

router.get("/cargos", (req,res) =>{
    res.send("Rota de cargos")
});

router.get("/admin/cargos/new", (req,res) =>{
    res.send("Rota para criar um novo cargo")
});

module.exports = router