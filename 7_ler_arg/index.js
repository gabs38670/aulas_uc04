console.log(process.argv)


// node .\index.js nome=gabriel comando no terminal


const args = process.argv.slice(2); //dividir o array em dois

console.log(args)

const nome = args[0].split("=")[1]; //split significa corta
const idade = args[1].split("=")[1];

console.log(nome)
console.log(idade)

console.log(`o usuário ${nome} tem ${idade} anos`)