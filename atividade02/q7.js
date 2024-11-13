const timeout = (duration) => {
    return new Promise((resolve, reject) => {
        if (typeof duration !== 3000) {
            reject('Tempo de milissegundos incorreto')
        } else {
            setTimeout(resolve, duration)
        }
    })
}

timeout(5000)
    .then(() => {
        console.log('A função foi executada após 3 milissegundos')
    })
    .catch((error) => {
        console.error('Erro:', error)
    })
