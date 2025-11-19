const auth = require("../middlewares/authMiddleware.js");
const model = require("../models/usersModel.js");

async function criar(req, res) {
    try {
    const senhaCifrada = auth.cifrarSenha(req.body.senha);
    const novoUsuario = model.create({ email: req.body.email, senha: senhaCifrada})
    return res.status(201).json({ _id, email})
} catch (err) {
        res.status(422).json({ msg: "Email e Senha são obrigatórios" });
      }
}

module.exports = { criar }