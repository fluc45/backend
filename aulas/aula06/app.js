const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const tarefaRouter = require("./routes/tarefas");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/tarefas", tarefaRouter)

module.exports = app;

//apagar linhas 7 13 18 e 2
