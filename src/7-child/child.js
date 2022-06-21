import * as fs from "fs/promises";
/* Parte de pruebas clase */

//console.log("child working");

// process.send({ msg: "I am a child working" });
// process.on("message", (arg) => {
//   if (arg.msg) {
//     console.log(`Received from child ${arg.msg}`);
//   }
//   if (arg.close) {
//     console.log("parent make me close");
//     process.exit(1);
//   }
// });

/* Parte tarea de clase */

process.on("message", (parent) => {
  let valor = parent.numero + " ";
  let aux = parent.numero;
  console.log(parent.numero);
  if (parent.numero <= 0) {
    fs.writeFile(`./src/7-child/${aux}.txt`, valor + "error").finally(()=>process.exit());
    //process.send({ error: "error numero cero" });
  }
  if (parent.numero == 1) {
    fs.writeFile(`./src/7-child/${aux}.txt`, parent.numero + "").finally(()=>process.exit());

  }
  if (parent.numero > 1) {
    while (parent.numero != 1) {
      if (parent.numero % 2 == 0) {
        parent.numero = parent.numero / 2;
        valor += parent.numero + " ";
      } else {
        parent.numero = parent.numero * 3 + 1;
        valor += parent.numero + " ";
      }
    }
    fs.writeFile(`./src/7-child/${aux}.txt`, valor).finally(()=>process.exit());
  }
});