import perfy from 'perfy';

//algoritmos de ordenação vão aqui
// import bubbleSort from './algorithms/bubbleSort.js'
import quickSort from './algorithms/quickSort.js';

// conjunto de dados aleatorios
import vet_10 from './sets/random/random_10.js'
import vet_100 from './sets/random/random_100.js'
import vet_1000 from './sets/random/random_1000.js'
import vet_10000 from './sets/random/random_10000.js'
import vet_100000 from './sets/random/random_100000.js'
import vet_20 from './sets/random/random_20.js'
import vet_200 from './sets/random/random_200.js'
import vet_2000 from './sets/random/random_2000.js'
import vet_20000 from './sets/random/random_20000.js'
import vet_200000 from './sets/random/random_200000.js'
import vet_30 from './sets/random/random_30.js'
import vet_300 from './sets/random/random_300.js'
import vet_3000 from './sets/random/random_3000.js'
import vet_30000 from './sets/random/random_30000.js'
import vet_300000 from './sets/random/random_300000.js'
// conjunto de dados ordenados decrescentes

import invert_10 from './sets/invert/invert_10.js'
import invert_100 from './sets/invert/invert_100.js'
import invert_1000 from './sets/invert/invert_1000.js'
import invert_10000 from './sets/invert/invert_10000.js'
import invert_100000 from './sets/invert/invert_100000.js'
import invert_20 from './sets/invert/invert_20.js'
import invert_200 from './sets/invert/invert_200.js'
import invert_2000 from './sets/invert/invert_2000.js'
import invert_20000 from './sets/invert/invert_20000.js'
import invert_200000 from './sets/invert/invert_200000.js'
import invert_30 from './sets/invert/invert_30.js'
import invert_300 from './sets/invert/invert_300.js'
import invert_3000 from './sets/invert/invert_3000.js'
import invert_30000 from './sets/invert/invert_30000.js'
import invert_300000 from './sets/invert/invert_300000.js'
// conjunto de dados ordenados crescentemente
import sorted_10 from './sets/sorted/sorted_10.js'
import sorted_100 from './sets/sorted/sorted_100.js'
import sorted_1000 from './sets/sorted/sorted_1000.js'
import sorted_10000 from './sets/sorted/sorted_10000.js'
import sorted_100000 from './sets/sorted/sorted_100000.js'
import sorted_20 from './sets/sorted/sorted_20.js'
import sorted_200 from './sets/sorted/sorted_200.js'
import sorted_2000 from './sets/sorted/sorted_2000.js'
import sorted_20000 from './sets/sorted/sorted_20000.js'
import sorted_200000 from './sets/sorted/sorted_200000.js'
import sorted_30 from './sets/sorted/sorted_30.js'
import sorted_300 from './sets/sorted/sorted_300.js'
import sorted_3000 from './sets/sorted/sorted_3000.js'
import sorted_30000 from './sets/sorted/sorted_30000.js'
import sorted_300000 from './sets/sorted/sorted_300000.js'



//conjunto de testes aleatorios
const testes_random = [vet_10, vet_100, vet_1000, vet_10000, vet_100000,vet_20, vet_200, vet_2000, vet_20000, vet_200000,vet_30, vet_300, vet_3000, vet_30000, vet_300000]
//conjunto de testes ordenados decrescentes
const testes_invert = [invert_10, invert_100, invert_1000, invert_10000, invert_100000,invert_20, invert_200, invert_2000, invert_20000, invert_200000,invert_30, invert_300, invert_3000, invert_30000, invert_300000]
//conjunto de testes ordenados crescentemente
const testes_sorted = [sorted_10, sorted_100, sorted_1000, sorted_10000, sorted_100000,sorted_20, sorted_200, sorted_2000, sorted_20000, sorted_200000,sorted_30, sorted_300, sorted_3000, sorted_30000, sorted_300000]
    

// //teste aleatorio
// testes_random.forEach(t => {
//   //seta o contador para começar a marcar o tempo
//   perfy.start('label-start');
//   //editar essa linha
//   // executa o algoritmo escolhido
//   let result = bubbleSort(t);
//   //termina a contagem de tempo
//   let end = perfy.end('label-start').time;

//   //e alterar o nome do algoritmo de ordenação
//   //exibe o tempo de execução do algoritmo
//   console.log("Tempo de execução do bubbleSort com ",result.length, "elementos aleatorios :", end, "s")

// })

// teste decrescente
// testes_invert.forEach(t => {
//   //seta o contador para começar a marcar o tempo
//   perfy.start('label-start');
//   //editar essa linha
//   // executa o algoritmo escolhido
//   let result = quickSort(t);
//   //termina a contagem de tempo
//   let end = perfy.end('label-start').time;

//   //e alterar o nome do algoritmo de ordenação
//   //exibe o tempo de execução do algoritmo
//   console.log("Tempo de execução do quickSort com ",result.length, "elementos decrescentes:", end, "s")

// })

// teste ordenado
testes_sorted.forEach(t => {
  //seta o contador para começar a marcar o tempo
  perfy.start('label-start');
  //editar essa linha
  // executa o algoritmo escolhido
  let result = quickSort(t);
  //termina a contagem de tempo
  let end = perfy.end('label-start').time;

  //e alterar o nome do algoritmo de ordenação
  //exibe o tempo de execução do algoritmo
  console.log("Tempo de execução do bubbleSort com ",result.length, "elementos ordenados:", end, "s")

})
