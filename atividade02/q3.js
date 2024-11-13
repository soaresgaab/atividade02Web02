function soma(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a + b), 1000); 
    });
}

function subtracao(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a - b), 1000); 
    });
}

function multiplicacao(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a * b), 1000);
    });
}

function aguardar(promises) {
    return Promise.all(promises);
}

const promessaSoma = soma(40, 10);
const promessaSubtracao = subtracao(600, 100);
const promessaMultiplicacao = multiplicacao(500, 10);

aguardar([promessaSoma, promessaSubtracao, promessaMultiplicacao])
    .then((res) => {
        console.log('Resultados das operações/promessas:', res); 
    })
    .catch((erro) => {
        console.error('Erro:', erro);
    });
