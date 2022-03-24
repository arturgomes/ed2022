/**
 * Ler um vetor R de 5 elementos contendo o gabarito da LOTO. 
 * A seguir ler um vetor A de 10 elementos contendo uma aposta. 
 * A seguir imprima quantos pontos fez o apostador.
 * 
[Entrada]
4 12 34 25 17 (gabarito)
3 17 55 21 34 4 27 29 20 11 (aposta)
[Saída]
3 (pontos)

 */

function loteria(aposta, gabarito) {
  let pontos = 0; //comeca contantador com 0
  for (let x = 0; x < gabarito.length; x++) { // iteracao sobre gabarito
    // para cada elemento de gabarito, faremos
    // uma iteração no vetor de apostas
    for (let y = 0; y < aposta.length; y++) {
      // para cada elemento no vetor de apostas
      // vamos comparar se tal elemento está no gabarito.
      if (gabarito[x] === aposta[y]) {
        //se estiver, incrementa a pontuação
        pontos++;
      }
    }
  }
  return pontos;
}

const gabarito = [4, 12, 34, 25, 17]
const aposta = [3, 55, 21, 27, 29, 20, 11, 4, 12, 34, 25, 17]
// console.log("1. o numero de pontos acertados é:", loteria(gabarito, aposta))

function loteria2(gabarito, aposta) {
  let pontos = 0;
  gabarito.map(elemGabarito =>
    aposta.map(elemAposta => {
      if (elemAposta === elemGabarito) {
        pontos++;
      }
    }))
  return pontos;
}
function loteria3(gabarito, aposta) {
  let pontos = 0;
  gabarito.map(elemGabarito =>
    aposta.map(elemAposta => (elemAposta === elemGabarito) && pontos++
    ))
  return pontos;
}
// console.log("2. o numero de pontos acertados é:", loteria2(gabarito, aposta))


// if(condicao){
//   codigo
// }else{
//   codigo2
// }
// =
// condicao ? codigo : codigo2
// =
// condicao && codigo

function aleatorio(){
  // return 3>2 ? 3 : 2
  return 3>2 && 3 
}

const vet = [1,2,3,4]
//map itera e retorna um novo vetor
const vet2 = vet.map(elem => elem + 1)
console.log(vet2)
// forEach só itera e não retorna nada
const vet3 = vet.forEach(elem => elem + 1)
console.log(vet3)