function merge(esquerdo, direito) {
 let vetor = [];
  while (esquerdo.length && direito.length) {
    if (esquerdo[0] < direito[0]) {
      vetor.push(esquerdo.shift())
    } else {
      vetor.push(direito.shift())
    }
  }


//isso[vetor,R,L] equivale a [[1,2,3],[4,5,6],[7,8,9]]
//porém,
// [...[1,2,3],...[4,5,6],...[7,8,9]] equivale a [1,2,3,4,5,6,7,8,9]
return [...vetor, ...esquerdo, ...direito];
}


function mergeSort(vetor) {
  const metade = vetor.length / 2
  if (vetor.length < 2) {
    return vetor
  }
  const esquerdo = vetor.splice(0, metade)
  return merge(mergeSort(esquerdo), mergeSort(vetor))
}
console.log(mergeSort([5, 4, 3, 2, 1]))

export default mergeSort;