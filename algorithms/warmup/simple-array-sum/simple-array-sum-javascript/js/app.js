let entradaString = ['2', '5, 5'];
let entradaAtual = 0;

function lerEntrada() {

    return entradaString[entradaAtual++];
}

function principal() {

    const entrada = parseInt(lerEntrada().trim(), 10);
    
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    const resultado = simpleArraySum(arr)

    console.log(resultado + '\n');
}

principal();

// export function simpleArraySum(arr) {

//     const contador = arr.reduce((acc, curr) => acc + curr, 0);

//     return contador;
// }

// export function simpleArraySum(arr) {

//     let contador = 0;

//     for(let i = 0; i < arr.length; i++){
        
//         contador += arr[i];
//     }
//     return contador;
// }

// export function simpleArraySum(arr) {

//     let contador = 0;

//     arr.forEach(element => {
        
//         contador += element
//     });

//     return contador;
// }

export function simpleArraySum(arr) {

    let contador = 0;

    for (var num of arr) {

        contador += num;
    }

    return contador;
}