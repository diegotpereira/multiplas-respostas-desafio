

let stringEntrada = []
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
    
}

function principal() {
    
    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ')

    const n = parseInt(primeiraMultiplaEntrada[0], 1);

    const m = parseInt(primeiraMultiplaEntrada[0], 1);

    let topicos = [];

    for (let index = 0; index < n; index++) {
        
        const topicoItem = lerEntrada();

        topicos.push(topicoItem);
        
    }

    const resultado = acmTeam(topicos);

    console.log(resultado.join('\n') + '\n');
}

principal();