/**
 *  Ler um vetor D de 10 elementos. 
 *  Retire todos os valores nulos ou negativos do vetor D. 
 *  Escrever o vetor após a retirada dos nulos e negativos.
[Entrada]

Vetor D
 0     1    2    3    4    5    6    7    8    9 
+----+----+----+----+----+----+----+----+----+----+  
| 13 | -3 |  3 |  0 | -1 |  6 |  1 |-42 | 23 |  0 | 
+----+----+----+----+----+----+----+----+----+----+

[Saída]

Vetor D 
 0     1    2    3    4    5    6    7    8    9 
+----+----+----+----+----+----+----+----+----+----+ 
| 13 |  3 |  6 |  1 | 23 |    |    |    |    |    | 
+----+----+----+----+----+----+----+----+----+----+

 */

function retornaPositivos(vetor){
  let novoVetor = [];
  vetor.map(elem => {
    if(elem > 0) novoVetor.push(elem);
  })
  return novoVetor;
}
//fonte FiraCode, adicionar "ligatures"
function retornaPositivos2(vetor){
  let novoVetor = [];
  vetor.map(elem => (elem > 0) && novoVetor.push(elem))
  return novoVetor;
}
const inicial = [13, -3,  3,  0, -1,  6,  1,-42, 23,  0]
console.log(retornaPositivos(inicial))