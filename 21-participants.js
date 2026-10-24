const participantList = new Set();

const addParticipant = function (name) {
  if (participantList.has(name)) {
    console.warn("El nombre ya existe");
    return false;
  }
  participantList.add(name);
  return true;
};

const deleteParticipant = function (name) {
  if (!participantList.has(name)) {
    console.warn("Usuario no existente");
    return false;
  }
  participantList.delete(name);
  console.warn("Usuario eliminado");
  return true;
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
  participantList.delete(randomUserNumber);
  console.warn(winnerUser);
  return winnerUser;
};

module.exports = {
  drawStarter,
  showParticipantList,
  deleteParticipant,
  addParticipant,
  participantList,
};
