require("dotenv").config();
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`;

mongoose.connect(url);
  /*.then(() => console.log("Conectado no MongoDB"))
  .catch((err) => {
    console.log("Erro ao conectar no MongoDB", err.message);
  });*/


const apidocsRouter = require("./routes/apidocsRouter.js")
const usuariosRouter = require('./routes/usuariosRouter.js');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api-docs", apidocsRouter);



module.exports = app;
