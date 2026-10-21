const vendingMachine = require("./19-vending-machine");

describe("Vending machine testing", () => {
  test("En caso correcto, se retorna el nombre del producto, y el cambio", () => {
    expect(vendingMachine([200], 2)).toEqual({
      product: "chocolate",
      change: [100, 50],
    });
  });
  test("Si el dinero es insuficiente retorna un error y el dinero completo", () => {
    expect(vendingMachine([10], 4)).toEqual({
      message: "Operacion cancelada: Dinero insuficiente",
      change: [10],
    });
  });
  test("Si tipo de dinero es incorrecto retorna un error y el dinero completo", () => {
    expect(vendingMachine([600], 1)).toEqual({
      message: "Tipo de moneda incorrecto",
      change: [600],
    });
  });
  test("Si el dinero es insuficiente retorna un error y el dinero completo", () => {
    expect(vendingMachine([100, 100], 9)).toEqual({
      message: "Operacion cancelada: Producto inexistente",
      change: [100, 100],
    });
  });
});
