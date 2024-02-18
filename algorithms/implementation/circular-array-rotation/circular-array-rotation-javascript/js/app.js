

let stringEntrada = [];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    const n = parseInt(primeiraMultiplaEntrada[0], 10);

    const k = parseInt(primeiraMultiplaEntrada[0], 10);

    const q = parseInt(primeiraMultiplaEntrada[0], 10);

    const a = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    let consultas = [];

    for (let index = 0; index < q; index++) {
        
        const consultasItem = parseInt(lerEntrada().trim(), 10);

        consultas.push(consultasItem);
    }

    const resultado = circularArrayRotation(a, k, consultas);

    console.log(resultado.join('\n') + '\n');
}

principal();