const express = require ("express");
const router = express.Router();

router.get("/pagamentos", (req,res) =>{
    res.send("Rota de pagamentos")
});

router.get("/admin/pagamentos/new", (req,res) =>{
    res.send("Rota para criar um novo pagamento")
});

module.exports = router