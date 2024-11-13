const fs = require('fs').promises;

async function readdir(caminho) {
    try {
        const data = await fs.readFile(caminho, 'utf8');
        console.log('Conteúdo presente no diretório:', data);
    } catch (error) {
        console.error('Erro de leitura do diretório:', error);
    }
}

readdir('./texto-aprendizado.txt'); 
