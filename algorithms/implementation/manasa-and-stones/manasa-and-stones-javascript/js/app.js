

let stringEntrada = []
let entradaAtual  = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const T = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < T; index++) {

        const n = parseInt(lerEntrada().trim(), 10);
        
        const a = parseInt(lerEntrada().trim(), 10);

        const b = parseInt(lerEntrada().trim(), 10);

        const resultado = stones(n, a, b);

        console.log(resultado.join(' ') + '\n');
        
    }

}

principal();