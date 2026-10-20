/*Reto #18: El Procesador de Archivos (Módulo FS Nativo)
*   **Enunciado:** Crear un script autónomo en Node.js que interactúe con el disco rígido utilizando
       el módulo nativo `fs` (File System).
    * El script debe leer un archivo de texto plano (`logs.txt`) que simulará los registros 
       de errores de un servidor Cloud.
    * Debe procesar ese texto en memoria, filtrar y contar cuántas veces aparece la palabra 
       exacta `"ERROR_500"` o `"UNAUTHORIZED_401"`.
    * Finalmente, debe crear y guardar en el disco un archivo nuevo llamado `reporte.json`
        que contenga el resumen del conteo en un formato estructurado.
    * Si el archivo de origen no existe, el sistema debe capturar la excepción prolijamente
         sin que se caiga el script. */

const { readFile, writeFile } = require("fs").promises;

const fileReader = function (text) {
  const report = { ERROR_500: 0, UNAUTHORIZED_401: 0 };
  const lines = text.split("\n");
  for (let value of lines) {
    if (value.includes("ERROR_500")) {
      report.ERROR_500++;
    }
    if (value.includes("UNAUTHORIZED_401")) {
      report.UNAUTHORIZED_401++;
    }
  }
  return report;
};

async function fileFilter() {
  try {
    const text = await readFile("./logs.txt", "utf-8");
    const reportContainer = fileReader(text);

    await writeFile("./report.json", JSON.stringify(reportContainer));
  } catch (error) {
    console.error("El archivo no se encontro:", error.message);
  }
}

module.exports = fileReader;
fileFilter();
/* Así es el mapa de la herramienta que te da Node.js por adentro:
fs.promises = {
  readFile: function() { / ... código nativo para leer ... / },
  writeFile: function() { / ... código nativo para escribir ... / },
  mkdir: function() { / ... para crear carpetas ... / },
  unlink: function() { / ... para borrar archivos ... / },
  // ... muchas propiedades más
} */
