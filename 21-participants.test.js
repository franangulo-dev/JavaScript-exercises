const {
  drawStarter,
  showParticipantList,
  deleteParticipant,
  addParticipant,
  participantList,
} = require("./21-participants");

describe("Testing depaquete de funciones para calendario de adeviento", () => {
  beforeEach(() => {
    participantList.clear();
  });

  test("En caso de funcionar, retorna el nombre, y el size del set", () => {
    const result = addParticipant("fran");

    expect(result).toBe(true);
    expect(participantList.has("fran")).toBe(true);
    expect(participantList.size).toBe(1);
  });

  test("En caso de agregar duplicados, deberia quedar solo 1 nombre, y el size del set no cambiaria", () => {
    const firstTry = addParticipant("fran");
    const secondTry = addParticipant("fran");

    expect(firstTry).toBe(true);
    expect(secondTry).toBe(false);
    expect(participantList.size).toBe(1);
  });
  test("En caso de eliminar , la lista vacia deberia quedar size 0", () => {
    addParticipant("luis");
    const deleteResult = deleteParticipant("luis");

    expect(deleteResult).toBe(true);
    expect(participantList.has("luis")).toBe(false);
    expect(participantList.size).toBe(0);
  });

  test("En caso de eliminar usuario inexistente, la lista vacia deberia quedar size 0", () => {
    const deleteResult = deleteParticipant("messi");
    expect(deleteResult).toBe(false);
    expect(participantList.has("messi")).toBe(false);
    expect(participantList.size).toBe(0);
  });

  test("En caso de sorteo sale un ganador, y es eliminado, la lista de 3 deberia qudar en 2", () => {
    addParticipant("messi");
    addParticipant("luis");
    addParticipant("fran");
    const drawWinner = drawStarter();

    expect(drawWinner.length).toBe(1);
    expect(participantList.size).toBe(2);
  });
});
