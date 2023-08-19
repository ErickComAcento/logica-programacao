/* EXERCÍCIO 1 DE INTERPRETAÇÃO

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

RESPOSTA = Acho que o primeiro e segundo consoles 
vão dar false, o terceiro vai ser true e o quarto
vai ser boolean */



/* EXERCÍCIO 2 E 3 DE INTERPRETAÇÃO

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

RESPOSTAS = No console irá aparecer erro, o modo para
corrigir seria trocar o "let" nas duas primeiras linhas
para "const". E na linha da soma, faltou colocar "Number"
antes dos dois valores. */





/* EXERCÍCIO 1 DE CÓGIDO

const suaIdade = prompt("Qual tua idade meu querido?")
const idadeAmigo = prompt("Qual a idade do inútil do teu amigo?")
const diferenca = Number(suaIdade) - Number(idadeAmigo)
console.log("Tua idade é maior que a do teu amigo?", suaIdade > idadeAmigo)
console.log("A diferença de idade é", diferenca) */



/* EXERCÍCIO 2 DE CÓDIGO

const numPar = prompt("Coloca um número par aí meu rei")
console.log(Number(numPar) % 2)

// CASO COLOQUE UM NÚMERO PAR O RESTO É SEMPRE 0
E SE COLOCAR NÚMERO ÍMPAR O RESULTADO É SEMPRE 1 */



/* EXERCÍCIO 3 DE CÓDIGO

const idade = prompt("Qual tua idade?")
const meses = Number(idade) * 12
const dias = 365 * Number(idade)
const horas = Number(dias) * 24
console.log("Tua idade em meses é", meses)
console.log("Tua idade em dias é", dias)
console.log("Tua idade em horas é", horas) */



/* EXERCÍCIO 4 DE CÓDIGO
const num1 = prompt("Coloca um número aí meu querido")
const num2 = prompt("Coloca mais um número meu patrão")
const divisao1 = Number(num1) / Number(num2) % 2
const resto1 = divisao1 <= 0
const divisao2 = Number(num2) / Number (num1) % 2
const resto2 = divisao2 <= 0
console.log("O primeiro número é maior que o segundo", num1 > num2)
console.log("O primeiro número é igual ao segundo?", num1 === num2)
console.log("O primeiro número é divisível pelo segundo?", resto1)
console.log("O segundo número é divisível pelo primeiro?", resto2) */



const faren = prompt("Quantos fairenrraite ta fazendo meu bom?")
const celc = prompt("Quantos celso tão?")
const celsodnv = prompt("Celso dnv")
const fk1 = Number(faren) - 32
const fk2 = Number(fk1) * 5 / 9 + 273.15
const ck1 = Number(celc) * 9 / 5 + 32

console.log("A transformação de fairenraite pra kelve é", fk2)
console.log("A transformação de celso pra kevin é", ck1)