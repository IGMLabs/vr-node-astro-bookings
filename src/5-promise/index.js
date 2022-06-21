import * as fs from 'fs/promises';

const scriptFile = process.argv[1];
fs.readFile(scriptFile)
.then( (filecontent) => {
    console.log(filecontent.toString());
})
.catch( (err) => {
    console.log(`Error: ${err} `);
})
.finally(() => {
    console.log("Terminado");
});