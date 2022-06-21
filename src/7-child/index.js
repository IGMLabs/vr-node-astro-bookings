import * as cp from "child_process";
 
/* parte de prueba */

const child = cp.fork("./src/7-child/child.js");
child.on("message", (arg) => console.log(`Received from child ${arg.msg}`));
child.send({ msg: "I am a parent child working" });
child.on("close", (code) => console.log("child closed, code: " + code));
child.send({ close: true });
console.log("parent started working");
child.kill();


/* Tarea  */

const parent = [0, 1, 2, 3, 5, 7, 11, 13];

parent.forEach((num) => {
    let fillo = cp.fork("./src/7-child/child.js");
    fillo.send({ numero: num });
});
