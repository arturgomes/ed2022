/**
 *  Ler um vetor de até 10 elementos. (ok)
 *  1. A leitura deverá ser executada até que 
 *  o vetor fique totalmente preenchido ou 
 *  seja informado um valor negativo ou zero. 
 *  Calcular e imprimir a soma dos valores 
 *  maiores que 5 existentes no vetor.
 * [Entrada]
 * [3, 7, 10, 2, 1, -1] (O valor -1 não deve ser armazenado no vetor)
 * [Saída]
 * 17
 */

function ex6(vet){
  let novoVetor = [];
  for(let i=0; i<vet.length; i++) {
    if(vet[i] > 0) {
      novoVetor.push(vet[i])
    } 
    else {
      break;
    }
  }
  let soma = 0;
  for(let i=0; i<novoVetor.length; i++) {
    if(novoVetor[i] > 5) {
      soma += novoVetor[i];
    }
  }
  console.log(soma)
}
ex6([1,9,2,8,3,7,4,6,5,-1])

// Parte 2:

// fazer a questão anterior e ao invés de somar
// todos os maiores que 5, somar apenas os dois 
// maiores