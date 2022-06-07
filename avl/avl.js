class Noh{
  constructor(val){
    this.val = val;
    this.altura = 1;
    this.esquerda = null;
    this.direita = null;
  }

  pegaFatBalanceamento(){
    const alturaEsquerda = this.esquerda ? this.esquerda.altura : 0
    const alturaDireita = this.direita ? this.direita.altura : 0
    return alturaDireita - alturaEsquerda;
  }

  corrigeAltura(){
    const alturaEsquerda = this.esquerda ? this.esquerda.altura : 0
    const alturaDireita = this.direita ? this.direita.altura : 0
    this.altura = (alturaEsquerda > alturaDireita 
                          ? alturaEsquerda 
                          : alturaDireita) + 1
  }
}
class AVL{
  constructor(){
    this.raiz = null;
  }

  rotEsquerda(noh){
    const raiz = noh.direita;
    const esquerda = noh;

    console.log("RSE", esquerda.val, "AR", raiz.val)

    esquerda.direita = raiz.esquerda;
    raiz.esquerda = esquerda;

    esquerda.corrigeAltura()
    raiz.corrigeAltura();

    return raiz;
  }
  rotDireita(noh){
    const raiz = noh.esquerda;
    const direita = noh;
    console.log("RSD", direita.val, "AR", raiz.val)

    direita.esquerda = raiz.direita;
    raiz.direita = direita;

    direita.corrigeAltura()
    raiz.corrigeAltura();
    
    return raiz;
  }

  balancea(noh){
    noh.corrigeAltura();
    if(noh.pegaFatBalanceamento()===2){
      console.log(this.emOrdem())
      // se estiver desbalanceado na direita
      // verifica se precisa fazer rotação dupla
      if(noh.direita.pegaFatBalanceamento()<0){
        // se sim, faz uma rotação à direita usando o nó direito
        noh.direita = this.rotDireita(noh.direita);
      }
      // finaliza com uma rotação à esquerda
      return this.rotEsquerda(noh)
    }
    if(noh.pegaFatBalanceamento()=== -2){
      console.log(this.emOrdem())
      // se estiver desbalanceado na esquerda
      // verifica se precisa fazer rotação dupla
      if(noh.esquerda.pegaFatBalanceamento()>0){
        // se sim, faz uma rotação à esquerda usando o nó esquerdo
        noh.esquerda = this.rotEsquerda(noh.esquerda);
      }
      // finaliza com uma rotação à direita
      return this.rotDireita(noh)
    }
    return noh;

  }
  inserir(val){
    console.log("inserindo", val)
    if(!this.raiz){
      this.raiz = new Noh(val);
      return this;
    }
    this.raiz = this._inserir(this.raiz, new Noh(val));
  }
  _inserir(noh, novoNoh){
    // se o valor a ser inserido já existe na árvore
    if(novoNoh.val === noh.val){
      // não insere e só retorna a árvore
      return noh;
    }
    // se o valor a ser inserido é menor que o valor do nó atual
    if(novoNoh.val < noh.val){
      // se o nó atual não tem filho à esquerda
      if(!noh.esquerda){
        noh.esquerda = novoNoh;
      } else{
        noh.esquerda = this._inserir(noh.esquerda, novoNoh);
      }
    } else {
      if(!noh.direita){
        noh.direita = novoNoh;
      } else{
        noh.direita = this._inserir(noh.direita, novoNoh);
      }
    }
    return this.balancea(noh)
  }
  emOrdem(noh = this.raiz){
    if(!noh){
      return ' * '
    }
    let res = '(';
    res += this.emOrdem(noh.esquerda);
    res += ` (${noh.val}|${noh.pegaFatBalanceamento()}) `;
    res += this.emOrdem(noh.direita);
    res += ')';
    return res;
  }

}

let arvore = new AVL();
// arvore.inserir(10);
// console.log(arvore.emOrdem());
// arvore.inserir(20);
// console.log(arvore.emOrdem());
// arvore.inserir(30);
// console.log(arvore.emOrdem());

[17,6,13,4,14,8,12,27,1,2,21,9].forEach(item =>{
  arvore.inserir(item);
  console.log(arvore.emOrdem());
})