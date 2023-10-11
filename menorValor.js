const livros = require('./listaLivros')

function menorValor(arrProdutos, posicaoInicial){
    
    let maisBarato = posicaoInicial;

    for(posicaoInicial; posicaoInicial < arrProdutos.length; posicaoInicial++){
        if(arrProdutos[posicaoInicial].preco < arrProdutos[maisBarato].preco){
            maisBarato = posicaoInicial;
        }
    }

    return maisBarato;
}

module.exports = menorValor;
