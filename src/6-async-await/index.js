import * as fs from "fs/promises";

readFile();

async function readFile() {
  const scriptFile = process.argv[1];
  try {
    const fileContent = await fs.readFile(scriptFile);
    await copyFile(fileContent.toString());
    console.log(fileContent.toString());
  } catch (err) {
    console.log(`Error: ${err} `);
  }
}

//Leer fichero y copiarlo
async function copyFile(fileContent, scriptFile) {
  try {
    await fs.writeFile(`${scriptFile}.copy.txt`, fileContent);
  } catch (err) {
    console.log(`Error: ${err} `);
  }
}
