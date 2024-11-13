const timeout = require('./q1.js');


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log("Olá");
    await sleep(3000); // "Pausa" de 2 segundos
    console.log("Depois de 3 segs");
}

main();

