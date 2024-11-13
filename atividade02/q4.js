function testando() {
    return "Testando o try/catch na questão 04";
}

async function main() {
    try {
        const result = testando();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

main();
