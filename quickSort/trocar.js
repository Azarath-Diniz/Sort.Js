// troca dois itens de uma lista de lugar
function trocar(array, de, para) {
    const temp = array[de];
    array[de] = array[para];
    array[para] = temp;

    return array;
}

module.exports = trocar;