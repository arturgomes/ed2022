import perfy from 'perfy';

import sorted_10 from '../sets/sorted/sorted_10.js'
import sorted_100 from '../sets/sorted/sorted_100.js'
import sorted_1000 from '../sets/sorted/sorted_1000.js'
import sorted_10000 from '../sets/sorted/sorted_10000.js'
import sorted_100000 from '../sets/sorted/sorted_100000.js'

const achaSoma = arr => {
  let total = 0
  for(let i =0; i<arr.length; i++){
    total += arr[i]
  }
  return total
}

const testes_sorted = [sorted_10, sorted_100, sorted_1000, sorted_10000, sorted_100000]


testes_sorted.forEach(t => {
  //seta o contador para começar a marcar o tempo

  var start = new Date()
  var hrstart = process.hrtime()
  var simulateTime = 5
  //editar essa linha
  // executa o algoritmo escolhido
  let result = achaSoma(t);
  //termina a contagem de tempo
  var end = new Date() - start,
  hrend = process.hrtime(hrstart)

  //e alterar o nome do algoritmo de ordenação
  //exibe o algoritmo
  // console.info('Execution time: %dms', end)
  console.info(t.length, hrend[1] / 1000000)
  // console.info('Result:',result)


})
