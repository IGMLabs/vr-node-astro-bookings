import * as fs from "fs/promises";

readFile();

async function readFile() {
  const scriptFile = process.argv[1];
  try {
    const fileContent = await fs.readFile(scriptFile);
    copyFile(null, fileContent);
    console.log(fileContent.toString());
  } catch (err) {
    console.log(`Error: ${err} `);
  }
}

//Leer fichero y copiarlo.
const scriptFile = process.argv[1];
async function copyFile(err, fileContent) {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    const fileWrite = await fs.writeFile(`${scriptFile}.copy.txt`, fileContent, onWriteEnd);
  }
}

function onWriteEnd() {
  console.log("Archivo copiado");
}
