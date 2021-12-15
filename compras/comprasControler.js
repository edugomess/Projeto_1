const express = require ("express");
const router = express.Router();

router.get("/compras", (req,res) =>{
    res.send("Rota de compras")
});

router.get("/admin/compras/new", (req,res) =>{
    res.send("Rota para criar um novo compra")
});

module.exports = router