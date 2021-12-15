const express = require ("express");
const router = express.Router();

router.get("/estados", (req,res) =>{
    res.send("Rota de estados")
});

router.get("/admin/estados/new", (req,res) =>{
    res.send("Rota para criar um novo estado")
});

module.exports = router