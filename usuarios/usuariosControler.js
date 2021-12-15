const express = require ("express");
const router = express.Router();

router.get("/usuarios", (req,res) =>{
    res.send("Rota de usuarios")
});

router.get("/admin/usuarios/new", (req,res) =>{
    res.send("Rota para criar um novo usuario")
});

module.exports = router