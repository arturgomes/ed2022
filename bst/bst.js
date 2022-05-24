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

  preOrdem(noh = this.raiz){
    if(!noh){
      return ' * '
    }
    let res = '(';
    res += ' ' + noh.val + ' ';
    res += this.preOrdem(noh.esquerda);
    res += this.preOrdem(noh.direita);
    res += ')';
    return res;
  }

  posOrdem(noh = this.raiz){
    if(!noh){
      return ' @ '
    }
    let res = '(';
    res += this.posOrdem(noh.esquerda);
    res += this.posOrdem(noh.direita);
    res += ' ' + noh.val + ' ';
    res += ')';
    return res;
  }
  buscar(val,noh = this.raiz){
    if(noh){
      if(noh.val === val){
        return noh
      }
      if(val < noh.val){
        return this.buscar(val, noh.esquerda)
      }
      else{
        return this.buscar(val,noh.direita);
      }
    } else return null;
  }
  minimo(noh = this.raiz){
    while(noh.esquerda){
      noh = noh.esquerda
    }
    return noh.val;
  }

  maximo(noh = this.raiz){
    while(noh.direita){
      noh = noh.direita
    }
    return noh.val;
  }
  sucessor(noh = this.raiz){
    return this.minimo(noh.direita)
  }

}

let arvore = new BST()
/**
 * ________________
 *        |
 *       (4)
 *      /   \
 *     []   [] 
 * 
 */
arvore.inserir(43);
arvore.inserir(24);
arvore.inserir(48);
arvore.inserir(15);
arvore.inserir(36);
arvore.inserir(44);
arvore.inserir(50);
arvore.inserir(14);
arvore.inserir(21);
arvore.inserir(35);
arvore.inserir(40);
arvore.inserir(45);
arvore.inserir(32);
arvore.inserir(37);

// console.log();
console.log(arvore.sucessor(arvore.buscar(24))===32); //32
console.log(arvore.sucessor(arvore.buscar(36))===37); //32
console.log(arvore.sucessor(arvore.buscar(43))===44); //32
dirVinteQuatro = arvore.buscar(24).direita
esqQuarentaTres = arvore.buscar(43).esquerda
console.log("O máximo da direita de 24 é: ",arvore.maximo(dirVinteQuatro));
console.log("O máximo da esquerda de 43 é: ",arvore.maximo(esqQuarentaTres));



// console.log(JSON.stringify(arvore))
// console.log(arvore.preOrdem())
// console.log(arvore.emOrdem())
// console.log(arvore.posOrdem())

// ( 43 
//   ( 24 
//     ( 15 
//       ( 14  *  * )
//       ( 21  *  * ))
//     ( 36 
//       ( 35 
//         ( 32  *  * ) 
//         * )
//       ( 40 
//         ( 37  
//           *  
//           * ) 
//         * )))
//   ( 48 
//     ( 44  
//       * 
//       ( 45  
//         *  
//         * ))
//     ( 50 
//       *  
//       * )))