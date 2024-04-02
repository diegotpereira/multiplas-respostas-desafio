

let stringEntrada = '';
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const q = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < q; index++) {
        
        const s = lerEntrada();

        const resultado = theLoveLetterMystery(s);

        console.log(resultado + '\n');
        
    }
}

principal();