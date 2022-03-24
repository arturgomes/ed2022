// declaração de variável tinha tipagem
// int x = 10;
// char y = 'a'; 
// int vet[5]

// Em Javascript a gente usa tipagem dinâmica, ou seja,
// a gente não precisa declarar o tipo da variável
/** var primeiraVariavel = "Artur"
var segundaVariavel = 10
var quartaVariavel = [1,2,3,4,5]
var terceiraVariavel = true
console.log(typeof terceiraVariavel)
terceiraVariavel = 10;
console.log(typeof terceiraVariavel)
*/

/**
 * qualquer coisa que voce colocar aqui
 * deu enter e ele cria
 * uma nova linha
 */
// nas versões mais novas, a gente usa let/const
// let meuNome = "Artur"
// meuNome = "oliveira"
// console.log(meuNome)
// for(let x = 0; x < 10; x++){
//     console.log(x)
// }

// switch(variavel){
//     case "Maria": console.log("1")
//     case "José": console.log("2")
//     case "Manuel": console.log("3")
//     case "Artur": console.log("4")
// }
// void imprime(char variavel[10])
// {
//   for(int i=0; i<10;i++){
//     printf("%d",i);
//   }
// tipoDeRetorno nomeDaFuncao(parametro){}
/**
 * Essa funcao so serve para exibir no console 
 * @param {*} parametro - coisas pra imprimir
 */
function nomeDaFuncao(parametro){
  console.log(parametro);
  return 1
}
nomeDaFuncao("Artur")
nomeDaFuncao(2022)
let vetorNomes = ["Artur", "Maria", "José", "Manuel"]
// [
//   ['a','r','t','u','r'],
//   ['m','a','r','i','a'],
//   ['j','o','s','e'],
//   ['m','a','n','u','e','l']
// ]
// for(let x = 0; x < 4; x++){
//   console.log(vetorNomes[x])
// }

function fibonnaci(x){
  if(x == 0){
    return 0
  }
  if(x == 1){
    return 1
  }
  return fibonnaci(x-1) + fibonnaci(x-2)
}
for(let x = 0; x < 15; x++){
  console.log(fibonnaci(x))
}

// struct endereco{
//   char rua[50];
//   char bairro[50];
//   char cidade[50];
//   char estado[50];
//   char cep[50];
// }


let endereco1 = {
  rua: "Rua dois",
  numero: 3,
  bairro: "Centro",
  cidade: "São Paulo",
  estado: "SP",
  cep: "01310-000"
};
// console.log('frase 1 2'," frase 3 4",`uma string ${3*4}`)
// console.log(`${endereco1.rua}, ${endereco1.numero}\nBairro ${endereco1.bairro}\n${endereco1.cidade} - ${endereco1.estado}\nCEP: ${endereco1.cep}`)

let pessoa = {
  nome: "Artur",
  idade: 22,
  endereco: endereco1

}
// console.log(`${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.endereco.cidade}`)

let minhaRua = "Rua Dom Aquino, 1234 - Centro - Corumbá - MS"
let meuNomeCompleto = "Artur Oliveira Gomes"
let meuCpf = "123.456.789-10"
let construaString = minhaRua + "\n " + meuNomeCompleto

let conjuntoDeInfos = {
  rua: minhaRua,
  nome: meuNomeCompleto,
  enderecoCompleto: construaString
}
console.log(conjuntoDeInfos.enderecoCompleto)

function convertBinaryToString(n){
  if(n == 0){
    return ""
  }
  let resto = n % 2
  let restoDaDivisao = n / 2
  return convertBinaryToString(restoDaDivisao) + resto
}
function bubbleSort(vetor, n){
  for(let x = 0; x < n; x++){
    for(let y = 0; y < n; y++){
      if(vetor[x] < vetor[y]){
        let aux = vetor[x]
        vetor[x] = vetor[y]
        vetor[y] = aux
      }
    }
  }
  return vetor
}
let randomArray = [9,8,7,6,5,4,3,2,1,0]
console.log(bubbleSort(randomArray,10)) 