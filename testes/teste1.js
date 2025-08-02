//Declare três variáveis diferentes (uma para cada tipo: 
//string, número e booleano) e atribua valores a elas. 
// Em seguida, exiba o tipo = typeof de cada variável no console.

var nome = 'Carolina'
console.log(typeof nome)

let num1 = 15
console.log(typeof num1)

let verdade = 'true'
console.log(typeof verdade)

/*
if(true){
    console.log(true)
}
*/

//====================================================

/*
Crie duas variáveis, uma contendo seu primeiro nome e outra 
contendo seu último nome. 
Em seguida, combine-as em uma terceira variável usando o operador + e em uma 
quarta variável usando template strings.Por fim, imprima os resultados 
obtidos no console.
*/

let nome1 = 'Carolina'
let nome2 = 'Andrade'

console.log(`esses são os nomes: ${nome1} e ${nome2}`)

//==============================================

/*
Declare duas variáveis, uma contendo um número e outra contendo uma string. 
Em seguida, combine-as em uma terceira variável usando 
template strings para montar uma frase e exiba o resultado no console.
*/

let cidadao = "Roberto"
let cidade = "Taquara"

console.log(`Esse é o ${cidadao} e ele mora na cidade de ${cidade}`)

//===========================
/*
Crie uma variável inicializada com um valor de qualquer tipo e, 
em seguida, reatribua um novo valor a essa variável. 
Imprima ambos os valores no console após atribuí-los.
*/

var valor = 15

if (valor > 10){
    valor = 17
}

console.log(valor)


//=======================================================

/*
Declare uma variável usando var fora de um bloco de código 
(por exemplo, if) e outra dentro desse bloco. 
Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e 
analise os resultados. 
Faça o mesmo processo utilizando let e compare com os resultados anteriores.
*/

var testeValor = 20
 
if (testeValor >= 20){
    var testeValor = 25
    console.log(testeValor)
}

var testeValor2 = 20

if (testeValor2 >= 20){
    let testeValor2 = 15
    console.log(testeValor2)
}

//======================================================

/*
Declare uma variável booleana que informa se está chovendo e utilize-a em 
uma estrutura condicional (if) para exibir uma mensagem informando 
se é preciso levar um guarda-chuva ou não dependendo do valor da variável.
*/

var chovendo

if (chovendo = true){
    console.log(`leve um guarda-chuva!`)
} else {
    console.log(`não leve o guarda-chuva!`)
}