const express = require ("express");
const router = express.Router();

router.get("/login", (req,res) =>{
    res.send("Rota de login")
});

router.get("/admin/login/new", (req,res) =>{
    res.send("Rota para criar um novo login")
});

module.exports = router