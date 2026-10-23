
const participantList = new Set();

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

module.exports = {drawStarter,showParticipantList,deleteParticipant,addParticipant,participantList}