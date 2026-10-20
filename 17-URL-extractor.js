/*   **Enunciado:** Crear una función que reciba como parámetro una cadena de texto (String) 
que represente una URL completa con filtros de búsqueda.
Ejemplo de entrada: `"https://api.com/v1/users?name=fran&role=admin&status=active"`
La función debe limpiar la cadena, detectar dónde arrancan los parámetros
 (después del signo `?`) y desarmar el string usando métodos de arrays y strings nativos.
 Debe retornar un objeto JSON limpio y estructurado con llave-valor de los filtros:
  `{ name: "fran", role: "admin", status: "active" }`.
Si la URL no contiene parámetros o está mal estructurada, debe lanzar una excepción controlada. */

const extractorURL = function (URL) {
  if (!URL.includes("?") || URL === "") {
    throw new Error("URL invalida");
  }
  let reciever = URL;
  let urlfilter = reciever.split("?");
  let dataFilter = urlfilter[1];
  let userData = dataFilter.split("&");
  let userObject = {};
  userData.forEach((element) => {
    let parts = element.split("=");
    userObject[parts[0]] = parts[1];
  });
  return userObject;
};

extractorURL("https://api.com/v1/users?name=fran&role=admin&status=active");
module.exports = extractorURL;
