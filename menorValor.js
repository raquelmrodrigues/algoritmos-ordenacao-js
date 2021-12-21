const livros = require('./listaLivros')

function menorValor(arrProdutos, posicaoInicial) {

    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual] < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;

console.log('o livro mais barato é ${livros[maisBarato].titulo} e custa ${livros[maisBarato].preco}')