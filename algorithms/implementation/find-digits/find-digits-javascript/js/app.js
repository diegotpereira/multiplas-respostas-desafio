

let stringEntrada = [''];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const t = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < t; index++) {
        
        const n = parseInt(lerEntrada().trim(), 10);

        const resultado = findDigits(n);

        console.log(resultado + '\n');
        
    }
}

principal();