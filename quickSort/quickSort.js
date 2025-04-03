const listaLivros = require("../lista/lista_livros.json");
const trocar = require("./trocar.js");

function quickSort(array, esquerda, direita) {

    if (array.length > 1) {
        const indiceAtual = particionar(array, esquerda, direita);

        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1);
        }
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }
    return array;
}

function particionar(array, esquerda, direita) {
    const pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++
        }
        while (pivo.preco < array[atualDireita].preco) {
            atualDireita--
        }

        if (atualEsquerda <= atualDireita) {
            trocar(array, atualEsquerda, atualDireita);
            atualEsquerda++
            atualDireita--
        }
    }
    return atualEsquerda
}

//console.log(quickSort(listaLivros, 0, listaLivros.length - 1));