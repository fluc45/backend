const { calcularMediaAluno } = require('../src/calcularMediaAluno.js');

test("O teste existe?", function(){
    expect(calcularMediaAluno).toBeDefined();
});
test("a1 e a2 estão definidos?", function(){
    expect(() => calcularMediaAluno()).toThrow('Notas a1 ou a2 não informadas')
});
test("a1 e a2 são negativos?", function(){
    expect(() => calcularMediaAluno(-1 , -2)).toThrow('Notas a1 ou a2 não podem ser negativas')
});
test("a3 não informada", function(){
    expect(calcularMediaAluno(6 , 8)).toBeCloseTo(7.2)
});
test("a3 é negativo?", function(){
    expect(() => calcularMediaAluno(1 , 2, -3)).toThrow("Nota a3 não pode ser negativa")
});

test("a3 com a1", function(){
    expect(calcularMediaAluno(6 , 0, 8)).toBeCloseTo(7.2)
});

test("a3 com a2", function(){
    expect(calcularMediaAluno(0 , 8, 6)).toBeCloseTo(7.2)
});