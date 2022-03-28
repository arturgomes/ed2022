function bubbleSort(vetor){
  let aux;
  for(let fim = vetor.length -1;fim>0; --fim){
    for(let i=0;i<fim;++i){
      if(vetor[i]>vetor[i+1]){
        aux = vetor[i]
        vetor[i] = vetor[i+1]
        vetor[i+1] = aux
      }
    }
  }
  return vetor
}
let tmp = [9,8,7,6,3,4,5,1,2]
console.log(bubbleSort(tmp))