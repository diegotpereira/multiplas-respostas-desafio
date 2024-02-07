

let stringEntrada = [];
let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const t = parseInt(lerEntrada().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        
        const primeiraMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

        const R = parseInt(primeiraMultiplaEntrada[0], 10);

        const C = parseInt(primeiraMultiplaEntrada[1], 10);

        let G = [];

        for (let i = 0; i < R; i++) {
            
            const GItem = lerEntrada();

            G.push(GItem);
            
        }
        
        const segundaMultiplaEntrada = lerEntrada().replace(/\s+$/g, '').split(' ');

        const r = parseInt(segundaMultiplaEntrada[0], 10);

        const c = parseInt(segundaMultiplaEntrada[1], 10);

        let P = [];

        for (let i = 0; i < R; i++) {
            
            const PItem = lerEntrada();

            P.push(PItem);
            
        }

        const resultado = gridSearch(G, P);

        console.log(resultado + '\n');
    }
}

principal();