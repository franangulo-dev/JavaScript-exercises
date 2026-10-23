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
    addParticipant("fran");
    expect(participantList.has("fran")).toBe(true);
    expect(participantList.size).toBe(1);
});

test("En caso de agregar duplicados, deberia quedar solo 1 nombre, y el size del set no cambiaria", () => {
    addParticipant("fran");
    addParticipant("fran");
    expect(participantList.size).toBe(1);
});
test("En caso de eliminar , la lista vacia deberia quedar size 0", () => {
    addParticipant("luis");
    deleteParticipant("luis");
    expect(participantList.has("luis")).toBe(false);
    expect(participantList.size).toBe(0);
  });
test("En caso de eliminar usuario inexistente, la lista vacia deberia quedar size 0", () => {
        deleteParticipant("messi");
    expect(participantList.has("messi")).toBe(false);
    expect(participantList.size).toBe(0);
  });
test("En caso de sorteo sale un ganador, y es eliminado, la lista de 3 deberia qudar en 2", () => {
        addParticipant("messi");
        addParticipant("luis");
        addParticipant("fran");
    drawStarter()
    expect(participantList.size).toBe(2);
  });
});
