const supertest = require("supertest");
const app = require("../app");
const { token } = require("morgan");
const request = supertest(app);

const url = "/produtos";

test("GET /produtos retorna 401 Não autorizado", async () => {
    const response = await request.get(url);
    expect(response.status).toBe(401);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body["msg"]).toBe("Não autorizado");
});

test("GET /produtos retorna 401 Token inválido", async () => {
    const response = await request.get(url).set("authorization", "Bearer 123456789");
    expect(response.status).toBe(401);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body["msg"]).toBe("Token inválido");
});

test("POST /usuarios/login retorna 200", async () => {
    const response = await request.post("/usuarios/login").send({
        "usuario": "email@exemplo.com",
        "senha": "abcd1234"
    });
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toHaveProperty('token');
    token = response.body["token"];
});

test("GET /produtos retorna 200", async () => {
    const response = await request.get(url).set("authorization", token);
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
});

test("POST /usuarios/renovar retorna 200", async () => {
    const response = await request.post("/usuarios/renovar").set("authorization", token);
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toHaveProperty('token');
    token = response.body["token"];
});

test("GET /produtos retorna 200 de novo", async () => {
    const response = await request.get(url).set("authorization", token);
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
});
