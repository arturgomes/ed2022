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

}

// let no = new Noh(4);
// no.direita = new Noh(5);
// no.esquerda = new Noh(3);

// let arvore = new BST();
// arvore.raiz = no;

// console.log(no)
/**
 *     ____________________
 *               |
 *               4
 *             /   \
 *            3     5
 *           / \   / \
 *    
 * 
 * Noh {
  val: 4,
  esquerda: Noh { val: 3, esquerda: null, direita: null },
  direita: Noh { val: 5, esquerda: null, direita: null }
}
 */