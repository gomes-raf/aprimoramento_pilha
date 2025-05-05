class Pilha {
    constructor() {
    this.itens = [];
    }

    empilhar(item) {
        this.itens.push(item);
        console.log(`O documento ${item} foi empilhado.`);
    }

    desempilhar() {
        const removido = this.itens.pop();
        console.log(`O documento ${removido} foi retirado.`);
        return removido;
    }

    topo() {
        return this.itens[this.itens.length - 1];
    }

    imprimir() {
        console.log('📦 Pilha atual:', this.itens.slice().reverse().join(' <- '));
    }
}

const pilha = new Pilha();
pilha.empilhar("1")
pilha.empilhar("2")
pilha.empilhar("3")

pilha.desempilhar()

console.log(`O topo da lista é o documento ${pilha.topo()}`)

pilha.imprimir()