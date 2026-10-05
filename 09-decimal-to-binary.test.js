const decimalToBinary = require("./09-decimal-to-binary");

describe(" Reto #09 -Decimal to binary: testing", () => {
  test("Caso 1: con numero entero", () => {
    expect(decimalToBinary(13)).toBe("1101");
  });
  test(`Caso 2: el 0 debe retornar el string "0" `, () => {
    expect(decimalToBinary(0)).toBe("0");
  });
  test("Caso 3: con datos diferentes a numeros ", () => {
    expect(decimalToBinary("hola, mundo")).toBe(false);
  });
  test("Caso 4: con datos con coma (flotantes)", () => {
    expect(decimalToBinary(13.5)).toBe(false);
  });
  test("Caso 5: para forzar el funcionamiento", () => {
    expect(decimalToBinary(45)).toBe("101101");
  });
});
