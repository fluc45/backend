const express = require("express");

const controller = require("../controllers/usuariosController");

const auth = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/" , (req, res) => {
    usuarioController.create({usuario: username, senha: bcrypt.hash(password)})
  });
  
module.exports = router;
