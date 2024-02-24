const fs = require('fs')

fs.readFile('arquivo.txt', 'utf8',(err, data) =>{
    console.log(data)
})

// node .\ index.js abrir as infromações que tem no index.js
