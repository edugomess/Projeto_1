const express = require ("express");
const router = express.Router();

router.get("/dashboard", (req,res) =>{
    res.send("Rota de dashboard")
});

router.get("/admin/dashboard/new", (req,res) =>{
    res.send("Rota para criar um novo dashboard")
});

module.exports = router