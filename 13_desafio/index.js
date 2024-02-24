 const chalk = require("chalk")

// const nota1= require (`digite sua nota ${nota1}`)

// const nota = 8

const readline = require("readline")



const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
})
rl.question("Digite o nome do aluno:",(NomeAluno) =>{

rl.question("Digite a primeira nota" ,(nota1) =>{
    rl.question("Digite a segunda nota",(nota2) =>{
        const media = (parseFloat(nota1) + parseFloat(nota2))/2


        console.log(chalk.bold(`Aluno(a) ${nomeAluno} teve a Média ${media.toFixed(2)}`))

        if (media > 7){
            console.log(chalk.green.bold("👌 Aprovado"))
        } else if (media >5 && media < 7){
            console.log(chalk.yellow.bold("😱 Recuperação!"))
        } else {
            console.log(chalk.red.bold("🤦‍♂️ Reprovado"));
       }
        
        rl.close();
    });
});
});


// if(nota =5){
//     console.log(chalk.bgBlue.black("Parabéns vc tirou um nota boa😊"))
// }else{
//     console.log(chalk.bgRed.black("que pena sua nota não foi boa😢"))
// };


