const fs = require("fs")
console.log("Início")
fs.writeFileSync("arquivo.txt", "oi jovem!")
console.log("Fim")