class Noh{
  constructor(val, esquerda = null, direita = null){
      this.val = val;
      this.esquerda = esquerda;
      this.direita = direita;
  }
}

class BST{
  constructor(){
    this.raiz = null
  }

  
  inserir(val, noh = this.raiz) {
    if (this.raiz === null) {
      this.raiz = new Noh(val);
      return
    }
      if(noh.val === val){
        return
      }
      else{
        if(val < noh.val){
          if(noh.esquerda === null){
            noh.esquerda = new Noh(val);
          }
          else{
            this.inserir(val,noh.esquerda)
          }
        }
        else{
          if(noh.direita === null){
            noh.direita = new Noh(val);
          }
          else{
            this.inserir(val,noh.direita)
          }
        }
      }
    
  }
  
  buscar(val, noh = this.raiz){
      if(!noh){
        return false
      }
      else if (noh.val === val){
        return true
      }
      else if(val < noh.val){
          return this.buscar(val,noh.esquerda)
        }
      else{
          return this.buscar(val,noh.direita)
        }

  }

  preOrdem(noh = this.raiz){
    let res = '(';
    if(!noh){
      return ' @ '
    }
    res += " "+noh.val+" "
    res += this.preOrdem(noh.esquerda)
    res += this.preOrdem(noh.direita)
    res += ')'
    return res;
  }

  emOrdem(noh = this.raiz){
    let res = '(';
    if(!noh){
      return ' @ '
    }
    res += this.preOrdem(noh.esquerda)
    res += " "+noh.val+" "
    res += this.preOrdem(noh.direita)
    res += ')'
    return res;
  }
  posOrdem(noh = this.raiz){
    let res = '(';
    if(!noh){
      return ' @ '
    }
    res += this.preOrdem(noh.esquerda)
    res += this.preOrdem(noh.direita)
    res += " "+noh.val+" "
    res += ')'
    return res;
  }

  getMin(noh = this.raiz) {
    while(noh.esquerda) {
      noh = noh.esquerda;
    }
    return noh.val;
  }

  sucessor(noh = this.raiz) {
   return this.getMin(noh.direita)
  }

  remove(val, noh = this.raiz){
    if(noh){
      if(noh.val === val){
        if(noh.esquerda === null && noh.direita === null){
          noh = null
        }
        else if(noh.esquerda === null){
          noh = noh.direita
        }
        else if(noh.direita === null){
          noh = noh.esquerda
        }
        else{
          noh.val = this.sucessor(noh)
        }
      }
      else if(val < noh.val){
        this.remove(val,noh.esquerda)
      }
      else{
        this.remove(val,noh.direita)
      }
    }
  }

}


let bst = new BST();
bst.inserir(3);
bst.inserir(6);
bst.inserir(4);
console.log(JSON.stringify(bst))
console.log(bst.buscar(4))
console.log(bst.buscar(5))
console.log(bst.preOrdem())

console.log(bst.emOrdem())
console.log(bst.posOrdem())
bst.remove(6)
console.log(bst.emOrdem())

