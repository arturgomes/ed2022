/**
 *  Ler 2 vetores, R de 5 elementos e S de 10 elementos. 
 *  Gere um vetor X que possua os elementos comuns a R e a S. 
 * 
 *  Considere que no mesmo vetor não haverá números repetidos. 
 * 
 *  Escrever o vetor X.
[Entrada]
            0    1    2    3    4 
          +----+----+----+----+----+ 
  Vetor R | 21 | 12 | 1  |  3 |  7 | 
          +----+----+----+----+----+
            0    1    2    3    4    5    6    7    8    9 
          +----+----+----+----+----+----+----+----+----+----+ 
  Vetor S | 13 | 31 |  3 | 21 | 14 | 6  | 1  | 42 | 23 | 32 | 
          +----+----+----+----+----+----+----+----+----+----+

[Saída]
            0    1    2    3    4 
          +----+----+----+----+----+ 
  Vetor X | 21 | 1  | 3  |    |    | 
          +----+----+----+----+----+
*/

//exemplo de inserção num vetor em javascript
let vetorVazio = [];
vetorVazio.push(1)
vetorVazio.push(3)
vetorVazio.push(5)
vetorVazio.push(7)
vetorVazio.pop()
vetorVazio.pop()
vetorVazio.map(elemento => console.log(elemento))


function intersecao(r, s) {
        let x = [];

        for (let i = 0; i < r.length; i++) {
                for (let j = 0; j < s.length; j++) {
                        if (r[i] === s[j]) {
                                x.push(r[i])
                        }
                }
        }
        return x
}
// console.log(intersecao([21,12,1,3,7],
//         [13,31,3,21,14,6,1,42,23,32]))

function uniao(r, s) {
        let x = []
        r.map(elem => x.push(elem))
        s.map(elem => {
                if (!x.includes(elem)) {
                        x.push(elem)
                }
        })
        return x

}
console.log(uniao([1, 3, 5, 7], [2, 3, 6, 7]))