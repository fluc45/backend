const express = require('express'); //3.a)
const tarefas = [  
    { id: 1, nome: "Estudar middleware", concluida: false },  
    { id: 2, nome: "Praticar Express", concluida: true }  
  ]; //3.b)

  const app = express(); //3.c)
  
app.use(express.json()); //3.d)


  var router = express.Router();

  const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }
  
  app.use(requestTime)
  
  app.get('/', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
  }) //3.e)


  app.use("/tarefas", router); //4.a)


  router.get("/", (req, res) => {
    return res.send(tarefas);
  }); //4.b)

  router.post("/", (req, res) => {
    console.log(req.body);
    res.status(201).send("Inserido com sucesso");
  }); //4.c)

  
router.get("/:id", (req, res) => {
    const { id } = req.params; //{id:1, param2: 5, param3:6}
    const tarefa = tarefas.find(item => item.id == id)
    if (tarefa) return res.send(tarefa);
    throw Error("Tarefa não localizada"); //res.status(404).send("Não achei");
  }); //4.d)


  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const tarefa = tarefas.find(item => item.id == id)
    if (tarefa) {tarefa = req.body; 
    return res.send(tarefa);}
    else
    res.status(404).send("Tarefa não localizada");
  }); //4.e)

  
router.delete("/:id", (req, res) => {
    const { id } = req.params; //{id:1, param2: 5, param3:6}
    const tarefa = tarefas.find(item => item.id == id)
    if (tarefa) {
        tarefa = {}
    }
    res.status(204).end();
    throw Error("Tarefa não localizada"); //4.f)
  });

  app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send("Algo de errado não está certo!");
  });

app.listen(3000, () => {
    console.log(`api on`);
   }); //3.f)
   
  /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router; //3.g)
