// troca dois itens de uma lista de lugar
function trocar(array, de, para) {
    const deAtual = array[de];
    const paraAtual = array[para];

    array[para] = deAtual;
    array[de] = paraAtual;

    return array;
}

module.exports = trocar;