/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */
function obtenerMCD(a, b) {
  while (b !== 0) {
    let result = a % b;
    ((a = b), (b = result));
  }
  return a;
}

let reciever = async function (URL) {
  let receptora = await fetch(URL);
  let buffer = Buffer.from(await receptora.arrayBuffer());
  let height = buffer.readUInt32BE(20);
  let width = buffer.readUInt32BE(16);
 let mcd = obtenerMCD(width, height);


  let aspectRatio = `${width/mcd}:${height/mcd}`;
  return aspectRatio;
};
reciever("https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png")
.then((resultado)=>{
    console.log("El AspectRatio es",resultado)
})
.catch((error)=>{
console.log("ERROR:", error.message)
})