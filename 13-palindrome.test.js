const palindrome = require("./13-palindrome");

test("Palindromo simple, solo letras dara true", () => {
  expect(palindrome("radar")).toBe(true);
});

test("Un palindromo complejo daria true", () => {
  expect(palindrome("Anita lava, la tina.")).toBe(true);
});

test("Un string vacio se considera true", () => {
  expect(palindrome("")).toBe(true);
});

test("Un texto que no sea palindromo dara false", () => {
  expect(palindrome("jorge, es developer")).toBe(false);
});

test("Datos que no sean string sera un error", () => {
  expect(()=>palindrome(213)).toThrow("Incorrect Data Type");
});
