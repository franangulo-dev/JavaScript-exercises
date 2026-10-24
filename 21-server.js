const express = require("express");
const app = express();
app.use(express.json());

const {
  participantList,
  addParticipant,
  deleteParticipant,
  showParticipantList,
  drawStarter,
} = require("./21-participants");

app.get("/participantes", (req, res) => {
  const listArray = Array.from(participantList);

  res.json(listArray);
});
app.delete("/participantes", (req, res) => {
  const partDeleted = deleteParticipant(req.body.name);
  if (partDeleted) {
    res.json("Usuario eliminado con exito");
  } else {
    res.status(400).json("El usuario no se encuentra, o ya fue eliminado");
  }
});

app.post("/participantes", (req, res) => {
  const partUpdated = addParticipant(req.body.name);
  if (partUpdated) {
    res.status(201).json({ mensaje: "Participante agregado con éxito" });
  } else {
    res.status(400).json({ error: "El nombre ya existe en la lista" });
  }
});

app.get("/draw", (req, res) => {
  if (participantList.size === 0) {
    return res
      .status(400)
      .json({ error: "No hay participantes disponibles para el sorteo" });
  }
  let winnerResult = drawStarter();
  res.status(200).json(winnerResult);
});

app.listen(3000, () => {
  console.log("WAKE UP");
});
