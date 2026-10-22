const trickOrTreat = require("./20-trick-treat");
const mockList = [{ name: "pepe", age: 6, height: 80 }];
describe("Testing for trickOrTreat", () => {
  test("En caso de funcionar, retorna los sustos justos", () => {
    const result = trickOrTreat("trick", mockList);
    expect(result.length).toEqual(4);
  });
  test("En caso de funcionar, retorna los caramelos justos", () => {
    const result = trickOrTreat("treat", mockList);
    expect(result.length).toEqual(8);
  });
  test("En caso de datos incorrectos, retorna un error", () => {
    expect(()=>trickOrTreat("dulce", mockList)).toThrow(
      "Operacion invalida, elige trick o treat",
    );
  });
  test("En caso de datos vacios, retorna un 0", () => {
    const result = trickOrTreat("trick", []);
    expect(result).toHaveLength(0);
  });
  test("En caso de datos que exceden los limites, los controla", () => {
    const extremeData = [{name: "roy", age: 90, height: 400 }]
    const result = trickOrTreat("treat", extremeData);
    expect(result).toHaveLength(12);
  });
});
