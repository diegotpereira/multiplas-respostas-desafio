

let stringEntrada = '';
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const g = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < g; index++) {
        
        const b = lerEntrada();

        const resultado = happyLadybugs(b);

        console.log(resultado + '\n');
        
    }
}

principal();