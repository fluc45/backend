const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

describe("testes para o recurso /usuarios", () => {
  test("POST /usuarios retorna 201", async () => {
    const response = await request
      .post("/usuarios")
      .send({ email: "usuario@email.com", senha: "abcd1234" });
    expect(response.status).toBe(201);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toHaveProperty("_id");
    expect(response.body.email).toBe("usuario@email.com");
    id = response.body._id;
  });
  test("POST /usuarios retorna 422", async () => {
    const response = await request.post("/usuarios");
    expect(response.status).toBe(422);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.msg).toBe("Email e Senha são obrigatórios");
  });
  test("POST /usuarios/login retorna 200", async () => {
    const response = await request
      .post("/usuarios/login")
      .send({ usuario: "usuario@email.com", senha: "abcd1234" });
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toHaveProperty("token");
    token = response.body["token"];
  });
  test("POST /usuarios/login retorna 401", async () => {
    const response = await request.post("/usuarios/login");
    expect(response.status).toBe(401);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.msg).toBe("Credenciais inválidas");
  });
  test("POST /usuarios/login/renovar retorna 200", async () => {
    const response = await request.post("/usuarios/login/renovar").set("authorization", token);
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toHaveProperty("token");
  });

  test("POST /usuarios/login/renovar retorna 401", async () => {
    const response = await request.post("/usuarios/login/renovar").set("authorization 123456789");
    expect(response.status).toBe(401);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.msg).toBe("Token inválido");
  });

  test("DELETE /usuarios/${id} retorna 204", async () => {
    const response = await request.delete(`/usuarios/${id}`).set("authorization", token);
    expect(response.status).toBe(204);
  });

});
