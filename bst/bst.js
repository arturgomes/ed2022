// Noh{ // lista ligada
//   valor
//   prox (next)
// }

// Noh{ // lista duplamente ligada
//   valor
//   prox (next)
//   anterior (prev)
// }

class Noh{
  constructor(val){
    this.val = val;
    this.esquerda = null;
    this.direita = null;
  }
}

class BST{
  //
  constructor(){
    this.raiz = null;
  }

  inserir(val, noh = this.raiz){
    // se a raiz estiver vazia, vamos inserir na raiz
    if(this.raiz === null){
      this.raiz = new Noh(val);
      return;
    }
    // se não:
    // verifica se val é valor armazenado no nó
    if(noh.val === val){
      // o elemento já existe?
      return;
    }
    // se não, verifica se val é menor que o valor armazenado no nó
    if (val < noh.val ){
      if(noh.esquerda === null){
        noh.esquerda = new Noh(val);
        return;
      }
      else{
        this.inserir(val, noh.esquerda);
      }
    }
    // verifica se val é maior do que o valor armazenado no nó
    else{
      if(noh.direita === null){
        noh.direita = new Noh(val);
        return;
      }
      else{
        this.inserir(val, noh.direita);
      }
    }

  }
/**
 * Imprimir 
 * preOrdem = valor (rec esquerda) (rec direita)
 * emOrdem = (rec esquerda) valor (rec direita)
 * posOrdem = (rec esquerda) (rec direita) valor
 */

  emOrdem(noh = this.raiz){
    if(!noh){
      return ' [] '
    }
    let res = '(';
    res += this.emOrdem(noh.esquerda);
    res += ' ' + noh.val + ' ';
    res += this.emOrdem(noh.direita);
    res += ')';
    return res;
  }

}

let arvore = new BST()
arvore.inserir(4)
console.log(arvore)
/**
 * ________________
 *        |
 *       (4)
 *      /   \
 *     []   [] 
 * 
 */
arvore.inserir(2);
arvore.inserir(1);
arvore.inserir(10);

// console.log(JSON.stringify(arvore))
console.log(arvore.emOrdem())
