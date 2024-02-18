

let stringEntrada = [];
let entradaAtual = 0;

function LerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const s = LerEntrada();

    const n = parseInt(LerEntrada().trim(), 10);

    const resultado = repeatedString(s, n);

    console.log(resultado + '\n');
}

principal();