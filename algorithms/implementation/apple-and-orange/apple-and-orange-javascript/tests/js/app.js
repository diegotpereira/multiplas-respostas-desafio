import countApplesAndOranges from '../js/countApplesAndOranges.js'

let stringEntrada = ['7', '11', '5', '15','-2, 2, 1', '5, -6'];

let entradaAtual = 0;

function lerEntrada() {
    
    return stringEntrada[entradaAtual++];

}

function principal() {
    
    const primeira_multipla_entrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    
    const s = parseInt(primeira_multipla_entrada[0], 10);
    
    const t = parseInt(primeira_multipla_entrada[1], 10);
    
    const segunda_multipla_entrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    
    const a = parseInt(segunda_multipla_entrada[0], 10);
    
    const b = parseInt(segunda_multipla_entrada[1], 10);
    
    const terceira_multipla_entrada = lerEntrada().replace(/\s+$/g, '').split(' ');
    
    const m = parseInt(terceira_multipla_entrada[0], 10);
    
    const n = parseInt(terceira_multipla_entrada[1], 10);
    
    const macas = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));
    
    const laranjas = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));
    
    const resultado = countApplesAndOranges(s, t, a, b, macas, laranjas)

    console.log(resultado);
}

principal();


