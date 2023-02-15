const fs = require('fs')

fs.readFile('./conversor.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.error('Ocorreu um erro durante a leitura do arquivo!')
    } else {
        console.log(data)
    }
})
