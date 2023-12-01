// Existem três personagens: 
// dois gatos (Cat A e Cat B) 
// e um rato (Mouse C). O objetivo 
// é determinar qual dos dois gatos 
// alcançará primeiro o rato, 
// considerando sua posição inicial 
// no eixo x. Os gatos e o rato 
// estão inicialmente localizados 
// em posições diferentes no eixo x.

// O problema pede para determinar o resultado com base nas seguintes condições:

// Se ambos os gatos alcançarem o rato ao mesmo tempo, o rato escapa, e a resposta é "Mouse C Escape".
// Se o Cat A alcançar o rato primeiro, a resposta é "Cat A Catch Mouse C".
// Se o Cat B alcançar o rato primeiro, a resposta é "Cat B Catch Mouse C".


// // A função catAndMouse recebe as posições iniciais dos gatos (x, y) e a posição inicial do rato (z) no eixo x.

// export function catAndMouse(x, y, z) {
    
//     // Verifica se a distância entre o rato e o Cat A é menor do que a distância entre o rato e o Cat B.
//     if (Math.abs(z - x) < Math.abs(z - y)) {
        
//         // Se Cat A estiver mais próximo do rato, retorna "Cat A".
//         return ("Cat A")

//     } else if (Math.abs(z - x) > Math.abs(z - y)) {
        
//         // Se Cat B estiver mais próximo do rato, retorna "Cat B".
//         return ("Cat B");

//     } else {

//         // Se as distâncias são iguais, o rato escapa, retorna "Mouse C".
//         return ("Mouse C")
//     }
    
// }

export function catAndMouse(x, y, z) {

    if (Math.abs(x - z) == Math.abs(y - z)) {
        
        return ('Mouse C');

    }

    return Math.abs(z - x) > Math.abs(z - y) ? 'Cat B' :  'Cat A';

}