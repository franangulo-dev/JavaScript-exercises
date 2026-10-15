const { userIDChecker, solve } = require("./16-async-management");

test("El usuario tiene un ID valido entre 1 y 100", async () => {
  await expect(solve()).resolves.toEqual({
    ID: 25,
    Name: "user-name",
    Role: "Student",
  });
});
test("El ID de usuario es invalido", async () => {
  await expect(userIDChecker(200)).rejects.toThrow("ID invalido");
});
