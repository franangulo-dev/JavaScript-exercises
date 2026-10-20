const extractorURL = require("./17-URL-extractor");

describe("Testing de extractorURL", () => {
  test("Si funciona, retorna la informacion del usuario", () => {
    expect(
      extractorURL(
        "https://api.com/v1/users?name=fran&role=admin&status=active",
      ),
    ).toEqual({ name: "fran", role: "admin", status: "active" });
  });

  test("En caso de URL vacia o incorrecta, se muestra una excepcion controlada", () => {
    expect(() => {
      extractorURL("");
    }).toThrow("URL invalida");
  });
});
