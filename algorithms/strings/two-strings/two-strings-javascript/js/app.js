

let stringEntrada = '';
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const q = parseInt(lerEntrada().trim(), 10);

    for (let index = 0; index < q; index++) {
        
        const s1 = lerEntrada();
        const s2 = lerEntrada();

        const resultado = twoStrings(s1, s2);

        console.log(resultado + '\n');
        
    }
}

principal();