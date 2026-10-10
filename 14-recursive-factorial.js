/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */
const factorial = function (anyNumber) {
    if (typeof anyNumber !== "number" && typeof anyNumber !== "bigint") {
        throw new Error("Incorrect Data type: Must be Number or BigInt");
    }
    const n = BigInt(anyNumber);
  if (n < 0n) {
    throw new Error("No se puede factorizar numeros negativos");
  }
  if (n < 1n) {
    return 1n;
  }
  const result = n * factorial(n - 1n);
  return result;
};
factorial(5);

module.exports = factorial;
