/**
 *  Ler as notas finais de uma turma de 10 alunos armazenando-as em 
 *  um vetor N. (ok)
 *  A seguir calcule a média aritmética das notas dos alunos aprovados 
 * (nota maior ou igual a 6). 
 * Armazene em um vetor P a posição (índice) que cada aluno ocupa 
 * no vetor N, 
 * dos alunos que obtiveram nota maior que a média calculada. 
 * Imprimir a média calculada e logo após o vetor P.
 * 
 * OBS: Não deixar valores em branco entre os elementos de P.
 * [Entrada]
 * [8.5, 5, 10, 8, 3.5, 7, 9, 4, 2, 9,] (vetor N)
 * [Saída]
 * 8.58 (média)
 * 2 6 9 (vetor P)
 */

function calculaMedia(n){
  //declara vetor média como vazio inicialmente
  let vetMedia = []; 
  //percorre n e filtra somente os elementos 
  //maiores ou iguais a 6
  n.map(elem => elem >= 6 && vetMedia.push(elem))
  //define variavel para média
  let media = 0;
  //percorre o vetor de médias e faz seu somatório
  vetMedia.map(elem => media = media + elem)
  //calcula a média sobre o tamanho do vetor vetMedia
  media = media/vetMedia.length
  let p = [];
  n.map((elem,index) => {
    if(media <=elem){
      p.push(index)
    }
  })
  // console.log(n)
  console.log(media)
  console.log(p)

  
}
calculaMedia([8.5, 5, 10, 8, 3.5, 7, 9, 4, 2, 9,])