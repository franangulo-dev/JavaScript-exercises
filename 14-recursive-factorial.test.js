const factorial = require ("./14-recursive-factorial")
test("Debe calcular el factorial de 5", () => {
  expect(factorial(5)).toBe(120n); 
});
test("El factorial de 0 es 1", () => {
  expect(factorial(0)).toBe(1n); 
});
test("No se puede calcular factoriales de numeros negativos", () => {
  expect(() => factorial(-1)).toThrow("No se puede factorizar numeros negativos"); 
});
test("Solo se puede factorizar numeros o BigInt", () => {
expect(() => factorial(false)).toThrow("Incorrect Data type: Must be Number or BigInt");
});
