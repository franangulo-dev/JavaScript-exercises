/**
 * 🚀 Reto #16: El Domador de la Asincronía (Promesas & async/await)
 *
 * Enunciado: Crear una función artesanal que reciba un ID de usuario (un número) y devuelva una Promesa.
 * - Usando `setTimeout` de 2 segundos, simulará una consulta a una base de datos remota.
 * - Si el ID es válido (entre 1 y 100), la promesa debe resolverse (`resolve`) devolviendo un objeto JSON simulado.
 * - Si el ID es inválido, menor a 1 o se pasa de 100, la promesa debe explotar con un rechazo (`reject`).
 */

function userIDChecker(ID) {
  return new Promise((resolve, reject) => {
    (setTimeout(() => {
      if (ID > 100 || ID < 1) {
        reject(new Error("ID invalido"));
      } else {
        resolve({ ID: ID, Name: "user-name", Role: "Student" });
      }
    }),
      2000);
  });
}
async function solve() {
  try {
    const result = await userIDChecker(25);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = { userIDChecker, solve };
