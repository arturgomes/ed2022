/**
 * Ler um vetor B de 9 elementos e um valor X. Incluir o valor X 
 * na primeira posição do vetor B fazendo com que os elementos 
 * existentes dentro do vetor sejam deslocados de uma posição 
 * para o final (Considere que existe espaço no vetor para o 
 * deslocamento). Logo após o processamento escrever o vetor B.
 * [Entrada]
 *           0    1    2    3    4    5    6    7    8    9 
 *         +----+----+----+----+----+----+----+----+----+----+ 
 * Vetor B | 13 | -3 |  3 |  0 | -1 | 6  |  1 | -42| 23 |    | 
 *         +----+----+----+----+----+----+----+----+----+----+
 * 80 (Valor X)
 * [Saída]
 * 
 * 
 * *           0    1    2    3    4    5    6    7    8    9 
 *         +----+----+----+----+----+----+----+----+----+----+ 
 * Vetor B | 80 | 13 | -3 |  3 |  0 | -1 |  6 |  1 |-42 | 23 | 
 *         +----+----+----+----+----+----+----+----+----+----+
*/

function insereNoInicio(vetor,x){
  let aux = []
  aux[0] = x;
  for(let i = 0; i< vetor.length; i++){
    aux[i+1] = vetor[i];
  }
  return aux;
}

console.log(insereNoInicio([13, -3,  3,  0, -1, 6 ,  1, -42, 23], 80))

function insereNoInicio2(vetor,x){
  let aux = [];
  aux.push(x)
  vetor.map(elem => aux.push(elem))
  return aux;
}
console.log(insereNoInicio2([13, -3,  3,  0, -1, 6 ,  1, -42, 23], 80))
