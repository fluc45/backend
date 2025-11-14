const express = require('express');
const bcrypt = require("bcrypt")

const auth = require("../middlewares/auth");
const usuarioModel = require('../models/usuarioModel');

const router = express.Router();

router.post("/" , (req, res) => {
  req.body.password
  usuarioModel.create({usuario: username, senha: bcrypt.hash(password)})
})

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  usuarioModel.findOne({ usuario: username, senha: bcrypt.hash(password)})

      const payload ={
        iss: "Minha API",
        aud: "Você S2",
        email: username,
        nome: "Jose"
      }
      try{
        return res.json({token: auth.gerarToken(payload)})
      } catch (err) {
        return res.status(500).json({msg: err.message})
      }
  })

  return res.status(401).json({msg: "Credenciais inválidas"})


router.post("/renovar", auth.verificarToken, auth.renovarToken);

module.exports = router;


/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});
