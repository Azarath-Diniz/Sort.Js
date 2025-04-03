const listaLivros = require("../lista/lista_livros.json");

function mergeSort(array) {

    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = mesclar(parte1, parte2);
    }
    return array;
}

// mescla duas listas organizadas
function mesclar(parte1, parte2) {
    let possicaoAtualParte1 = 0
    let possicaoAtualParte2 = 0
    const resultado = [];

    while (possicaoAtualParte1 < parte1.length && possicaoAtualParte2 < parte2.length) {
        const elementoParte1 = parte1[possicaoAtualParte1];
        const elementoParte2 = parte2[possicaoAtualParte2];

        if (elementoParte1.preco <= elementoParte2.preco) {
            resultado.push(elementoParte1);
            possicaoAtualParte1++;
        } else {
            resultado.push(elementoParte2);
            possicaoAtualParte2++;
        }
    }

    if (possicaoAtualParte1 < parte1.length) {
        resultado.push(...parte1.slice(possicaoAtualParte1));
    }

    if (possicaoAtualParte2 < parte2.length) {
        resultado.push(...parte2.slice(possicaoAtualParte2));
    }

    return resultado;
}

//console.log(mergeSort(listaLivros));