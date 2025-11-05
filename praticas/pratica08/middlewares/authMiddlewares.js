const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(" ")[1];
        const payload = jwt.verify(
            token, 
            process.env.JWT_SECRET
        );
        req.payload = {
            usuario: payload.iss
        };
    } catch (err) {
        res.status(401).json({msg: "Token invalido"})
    }
}

function gerarToken(payload){
    const expiresIn = 120; //2min
    try {
        const token = jwt.sign(
            payload, 
            process.env.JWT_SECRET,
            { expiresIn }
        );
        return token;
    } catch(err) {
        throw Error("Erro ao gerar token");
    }
}

module.exports = { verificarToken, gerarToken }