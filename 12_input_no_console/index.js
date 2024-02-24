const chalk = require("chalk")

const readline = require("readline").Interface({
    input: process.stdin,
    output: process.stdout,
})

readline.question(`Qual a sua linguagem de programação preferida?` , (language) =>{
    if (language === "javascript"){
        console.log(chalk.bgGreen.black("😍 ótima escolha!!!"))
    } else{
        console.log(chalk.bgRed.black("... é...tá bom!😒 "))
    }
    readline.close()
}) 

// nesse pequeno programa estou requerendo uma informação atraves do input, então usando o required