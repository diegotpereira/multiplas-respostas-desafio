

let stringEntrada = '';
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

function principal() {
    
    const n = parseInt(lerEntrada().trim(), 10);

    let arr = [];

    for (let index = 0; index < n; index++) {
        
        const arrItem = lerEntrada();

        arr.push(arrItem);
        
    }

    const resultado = gemstones(arr);

    console.log(resultado + '\n');

}

principal();