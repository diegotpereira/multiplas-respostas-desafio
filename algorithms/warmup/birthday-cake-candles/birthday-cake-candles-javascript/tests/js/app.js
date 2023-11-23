

let stringEntrada = '3, 2, 1, 3';
let atualEntrada = 0;

function lerEntrada() {

    return stringEntrada[atualEntrada++];
    
}

function principal() {

    const n = parseInt(lerEntrada().trim(), 10);
    
    const velas = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));
    
    const resultado = birthdayCakeCandles(velas);

    console.log(resultado + '\n');
}

principal();

function birthdayCakeCandles(velas) {

    let contarFreq = {};
    let maximaFreq = 0;

    for (const elemento of velas) {
        
        contarFreq[elemento] = (contarFreq[elemento] || 0) + 1;
        
        maximaFreq = Math.max(maximaFreq, contarFreq[elemento]);

    }
    

    return maximaFreq;

}