// npm install chalk@4.1.2  => é um pacote para instalar

const chalk = require("chalk")

const nota = 8

if(nota > 7) {
    console.log(chalk.green.bold("Parabéns jovem!😁"))
} else {
    console.log(chalk.bgRed.black("Eita jovem!!! não deu dessa vez😢🤷‍♂️"))
}