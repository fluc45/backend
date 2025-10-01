const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);

describe("Testes da rota /tarefas", () => {
  let id;
  
test("Deve listar usuários via GET", async function () {
  const response = await request.get("/tarefas");
  expect(response.status).toBe(200);
  expect(response.headers["content-type"]).toMatch(/json/);
  expect(response.body).not.toBeNull();
});

test("Deve criar usuário via POST", async function () {
  const response = await request.post("/tarefas").send({
    nome: "Estudar Node",
    concluida: false,
  });
  expect(response.status).toBe(201);
  expect(response.headers["content-type"]).toMatch(/json/);
  expect(response.body).not.toBeNull();
  expect(response.body["id"]).toBeDefined();
  id = response.body["id"];

});


test("GET /id retorna 200", async () => {
    const response = await request.get(`tarefas/${id}`);
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body["id"]).toBe(id);
    expect(response.body["nome"]).toMatch("Estudar Express");
    expect(response.body["concluida"]).toBeFalsy();
  });

  
  test("GET /1 retorna 404", async () => {
    const response = await request.get(`tarefas/1`);
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body["msg"]).toBe("Tarefa não encontrada");
  });

  
  test("DELETE /id retorna 204", async () => {
    const response = await request.delete(`tarefas/${id}`);
    expect(response.status).toBe(204);
    expect(response.body).toStrictEqual({});
  });

  test("DELETE /1 retorna 404", async () => {
    const response = await request.delete(`tarefas/1`);
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body["msg"]).toBe("Tarefa não encontrada");
  });
});
