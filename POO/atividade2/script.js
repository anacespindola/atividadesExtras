class Estoque {
    static controleEstoque = [
        {produto: "banana", precos: {promocao: 2.50,  normal: 3}, emPromocao: false},
        {produto: "arroz", precos: {promocao: 6.99,  normal: 8}, emPromocao: true},
    ]
}

class Produtos {
    constructor(produto, promocao, normal , emPromocao){
        this.produto = produto;
        this.preco = {promocao, normal};
        this.emPromocao = emPromocao
    }
}

const bananinha = new Produtos("bananinha", 20, 19, true)

console.log(bananinha)

function adicionarProduto(produto){
     Estoque.controleEstoque.push(produto);

     console.log(Estoque.controleEstoque);
}



adicionarProduto(bananinha);