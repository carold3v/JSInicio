/*
Crie uma variável contendo uma frase. Em seguida, 
exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
*/

const frase = 'bom dia!'
console.log('bom dia'.toUpperCase())

/*

Declare duas variáveis, uma inicializada com valor null e 
outra que não recebe atribuição (resultando em undefined). 
Exiba os valores no console.
*/

const animal = null;
let valor;

console.log(animal)
console.log(valor)

/*
Crie 3 variáveis de tipos diferentes, utilize template strings 
para combinar os diferentes tipos de dados (number, string, boolean) 
em uma única string e exiba o resultado no console.
*/

let numero = 4;
let nome = 'Ana';
let boolean = true;
const resposta = `${numero} + ${nome} + ${boolean}`

console.log(resposta)

/*
Crie uma variável numérica e uma string. 
Faça a conversão da variável numérica para string e da string para número. 
Exiba os tipos de dados resultantes no console.
*/

let meuNumero = 1
let meuDesenhoFavorito = 'Miraculous'

meuNumero = 'meu anime fav é haikyuu'
meuDesenhoFavorito = 5

console.log(meuNumero)
console.log(meuDesenhoFavorito)

let resultado = `${meuNumero} e ${meuDesenhoFavorito}`
console.log(resultado)

/*
Crie uma variável com uma string e utilize métodos de manipulação de strings, 
como toUpperCase, toLowerCase, slice ou outros, para modificar a string original.
Exiba os resultados finais no console.
*/

let meuAnimal = 'aslan'
console.log('aslan'.toUpperCase())

let meuSegundoAnimal = 'GATO'
console.log('GATO'.toLowerCase())

const animaisSelvagens = ["leão", "girafa", "guepardo"]
console.log(animaisSelvagens.slice(0)) //pega os "3"
console.log(animaisSelvagens.slice(1)) //pega a girafa + guepardo (do 1 até o 2)
console.log(animaisSelvagens.slice(2)) //pega o guepardo
