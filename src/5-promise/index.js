import * as fs from "fs/promises";

const scriptFile = process.argv[1];
fs.readFile(scriptFile)
  .then(copyFile)
  .then((fileContent) => copyFile(fileContent))
  .then(function onFileRead(fileContent) {
    copyFile(fileContent);
  })
  .catch(onError)
  .finally(() => {
    console.log("Terminado");
  });

//Leer fichero y copiarlo.

function onWriteEnd() {
  console.log("Archivo copiado");
}

function onError() {
  console.log(` error`);
}

function copyFile(fileContent) {
  fs.writeFile(`${scriptFile}.copy.txt`, fileContent)
    .then(onWriteEnd)
    .catch(onError)
    .finally(() => console.log("acabei"));
}
