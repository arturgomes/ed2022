class ListNode{
	constructor(data){
		this.data = data;
		this.next = null;
	}
}
class DLLNode{
	constructor(data){
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    insereNoInicio(valor) {
        let novoNo = new ListNode(valor);

        novoNo.next = this.head;
        this.size = this.size + 1;
        this.head = novoNo;
        return this.head;
    }
    insereNoFinal(valor) {
        let novoNo = new ListNode(valor);
        if (this.head === null) {
            this.head = novoNo;
            this.size = 1;
            return this.head;
        }
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = novoNo;
        this.size = this.size + 1;
        return this.head;
    }
    pegaNaPosicaoX(indice){
        if(indice < 0 || indice > this.size -1){
            return undefined
        }
        let contador = 0;
        let noh=this.head;
        while(noh){
            if(contador===indice){
                return noh
            }
            contador ++
            noh=noh.next
        }
        return null
    }
    
    insereNaPosição(valor,indice){
        if(!this.head){
            this.head=new ListNode(valor);
            return this.head;
        }
        if(indice===0){
            return this.insereNoInicio(valor)
        }
        
        let anterior=this.pegaNaPosicaoX(indice-1);
        let novoNo= new ListNode(valor)
        novoNo.next=anterior.next
        anterior.next=novoNo;
        return this.head;
    }
    
    excluiPrimeiroNo(){
        if(!this.head){
            return;
        }
        this.head= this.head.next;
        return this.head; 
    
    }
    imprime(){
      let listaBonita = "@ -> "
      let noh=this.head;
      while(noh!==null){
        listaBonita += noh.data + " -> "
        noh=noh.next
      }
      listaBonita += "null"

      console.log(listaBonita)

    }
}



let list = new LinkedList();
list.insereNoInicio(5)
list.insereNoInicio(4)
list.insereNoInicio(3)
list.insereNoFinal(6)
list.insereNaPosição(7,2)
list.insereNaPosição(7,4)
list.imprime()
// console.log(list)



