/*
 * ¿Conoces el calendario de aDEViento de la comunidad (https://adviento.dev)?
 * 24 días, 24 regalos sorpresa relacionados con desarrollo de software.
 * Desde el 1 al 24 de diciembre.
 *
 * Crea un programa que simule el mecanismo de participación:
 * - Mediante la terminal, el programa te preguntará si quieres añadir y borrar
 *   participantes, mostrarlos, lanzar el sorteo o salir.
 * - Si seleccionas añadir un participante, podrás escribir su nombre y pulsar enter.
 * - Si seleccionas añadir un participante, y este ya existe, avisarás de ello.
 *   (Y no lo duplicarás)
 * - Si seleccionas mostrar los participantes, se listarán todos.
 * - Si seleccionas eliminar un participante, podrás escribir su nombre y pulsar enter.
 *   (Avisando de si lo has eliminado o el nombre no existe)
 * - Si seleccionas realizar el sorteo, elegirás una persona al azar
 *   y se eliminará del listado.
 * - Si seleccionas salir, el programa finalizará.
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const participantList = new Set();

function askEntry(entry) {
  return new Promise((resolve) => {
    rl.question(entry, (participant) => {
      resolve(participant);
    });
  });
}

const addParticipant = function (name) {
  if (participantList.has(name)) {
    console.warn("El nombre ya existe");
  }
  participantList.add(name);
};

const deleteParticipant = function (name) {
  if (!participantList.has(name)) {
    console.warn("Usuario no existente");
  }
  if (participantList.has(name)) {
    participantList.delete(name);
    console.warn("Usuario eliminado");
  }
};

const showParticipantList = function () {
  console.log(participantList);
};

const drawStarter = function () {
  let arrayList = Array.from(participantList);
  let winnerUser = [];
  let randomUserIndex = Math.floor(Math.random() * arrayList.length);
  let randomUserNumber = arrayList[randomUserIndex];
  winnerUser.push(randomUserNumber);
  console.warn(winnerUser);
  participantList.delete(randomUserNumber);
};

async function mainMenu() {
  while (true) {
    const option = await askEntry(
      "Que accion desea realizar?:\n1. Añadir\n2. Borrar\n3. Mostrar\n4. Sortear\n5. Salir\nEscriba el numero:",
    );
    if (option === "1") {
      const nameToAdd = await askEntry("Agregue un nombre: ");
      addParticipant(nameToAdd);
    }
    if (option === "2") {
      const nameToDelete = await askEntry("Elimine un nombre: ");
      deleteParticipant(nameToDelete);
    }
    if (option === "3") {
      console.log("Lista de participantes: ");
      showParticipantList(true);
    }
    if (option === "4") {
      console.log("TENEMOS UN GANADOR!");
      drawStarter();
    }
    if (option === "5") {
      console.log("ADIOS, GRACIAS POR PARTICIPAR!");
      rl.close();
      break;
    }
  }
}
mainMenu();
