const twoSeconds = 2000;

// console.log("before with inner function");
// setTimeout(() => {
//   console.log("Hello after 4 seconds");
//   // eslint-disable-next-line no-magic-numbers
// }, twoSeconds);

// function printHello(){
//     console.log("Hello");
// }

// setTimeout(printHello, twoSeconds);

// console.log("before with arrow function expression");

// const printHello2 = () => console.log("Hello2");

// setTimeout(printHello2, twoSeconds);

// console.log("after all the code");


/* tarea de hacer un hola durante 4 segundos */
let cont = 1;
const id = setInterval(() => {    
    console.log("Hello " + cont);
    cont++;    
    if (cont > 4) {
        clearInterval(id);
    }
}, twoSeconds);