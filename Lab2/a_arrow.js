/**
 * Mostrar as diferentes formas de criar uma função.
 * 
 * function f1(){ console.log("Ola mundo!") }
 * const f2 = function(){ console.log("Ola mundo!") }
 * const f3 = () => "Ola Mundo arrow function!"
 */


/**
 * Definição de funções em C/C++
 */
// tipo nomeDaFuncao(tipo parametros){
//   bloco de conteúdo
// }

/**
 * Em Javascript a gente pode escrever
 * funções de três formas
 */
function nomeDaFuncao(parametros){
  //conteúdo da função
}
/**Definição de função através de variável
 * você pode passar (o endereço de) uma função
 * para uma variável, e essa poderá chamar a função
 * com seu nome
 * 
 * function fx(x){return x + 1}
 * pode ser reescrita como:
 * const fx = function(x){ return x + 1}
 * console.log(fx(1))
*/




/**
 * No javascript, podemos definir funções e armazenar
 * sua definição em uma variável
 * 
 * Do jeito que na matemática podemos ter:
 * f(x) = x+1
 * armazenamos em uma variável 'f' o conteúdo da função
 * f(1) = 2
 * Da mesma forma, podemos atribuir uma função existente 
 * para uma nova variável:
 * g(x) = f(x)
 * aqui, definimos na variavel 'g', que tem como parâmetro,
 * 'x', e o conteúdo da função de 'f'
 * g(1) = f(1) = 2
 */
// function calculaIMC(peso,altura){
//   return peso/(altura**2)
// }
// console.log(calculaIMC(75,1.75))

const calculaIMC = function(peso,altura){
  return peso/(altura**2)
}
// console.log(calculaIMC(75,1.75))

/** existe a terceira e ultima 
 * forma de definir funções, que chamamos
 * de arrow function...
 * Isso quer dizer: função seta, ou função anônima
 * 
 * Dado um conjunto de parâmetros, a gente pode
 * executar algum cálculo sem precisar definir o 
 * nome de uma função.
 * 
 * Exemplo:
 * const multiplicacao = (x, y) => x * y
 * const soma = (x,y) => x + y
 * const f = (x) => x + 1

*/
const g = (x) => f(x)
// console.log(g(1))

/** 
 * os vetores, possuem um conjunto de 
 * funções predefinidas no javascript
 * que ajudam no dia a dia do programador
 * 
 * aqui vamos usar a função 'map', que percorre 
 * o vetor, e aplica uma outra computação para cada elemento
 * do dado vetor
*/

/**
 * a função map percorre todo o comprimento
 * de um vetor e executa uma ação
 * para cada elemento do vetor
 */
// f(x) = x + 1
 const f = (x) => x + 1

// defini um vetor vet, com 4 numeros ímpares
const vet = [1,3,5,7]
// em seguida imprimi o conteúdo do vetor
// vet.map(e => console.log(e))
// depois, eu criei um novo vetor, 'vet2', onde 
// ele recebeu o resultado da função map, de f(x)
let vet2 = vet.map(e => f(e))
// para cada elemento do vetor, 'vet2', eu 
// imprimo seu conteúdo
// vet2.map(e => console.log(e))

const imc = (peso,altura) => (peso/(altura**2))
console.log(imc(75,1.75))


function imc(peso,altura){
  return (peso/(altura**2))
}