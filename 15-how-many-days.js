/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */
const dateComparor = function (date1, date2) {
  const dateFilter = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dateFilter.test(date1) || !dateFilter.test(date2)) {
    throw new Error("Formato de fecha incorrecto");
  }

  let [day1, month1, year1] = date1.split("/");
  let firstDate = new Date(year1, month1 - 1, day1);

  let [day2, month2, year2] = date2.split("/");
  let secondDate = new Date(year2, month2 - 1, day2);

  if (
    firstDate.getDate() !== Number(day1) ||
    firstDate.getMonth() !== Number(month1) - 1 ||
    firstDate.getFullYear() !== Number(year1) ||
    secondDate.getDate() !== Number(day2) ||
    secondDate.getMonth() !== Number(month2) - 1 ||
    secondDate.getFullYear() !== Number(year2)
  ) {
    throw new Error("Fecha inexistente");
  }

  let miliSecondDiff = firstDate - secondDate;
  let dayDifference = miliSecondDiff / 1000 / 60 / 60 / 24;
  dayDifference = Math.abs(dayDifference);
  return dayDifference;
};

module.exports = dateComparor;
