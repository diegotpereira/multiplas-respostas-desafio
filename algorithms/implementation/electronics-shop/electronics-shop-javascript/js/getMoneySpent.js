// O problema "Electronics Shop" no HackerRank trata-se de 
// encontrar a compra mais cara possível, dentro de um orçamento 
// dado, combinando um item de teclado e um item de unidade 
// de disco USB (pendrive). Os preços dos itens de teclado 
// e pendrive estão disponíveis em duas listas diferentes, 
// e o objetivo é encontrar a combinação dos dois itens cuja 
// soma dos preços seja máxima, mas que não ultrapasse o orçamento especificado.

// Resumidamente, a tarefa é implementar uma função que 
// recebe como entrada os preços dos teclados, os preços 
// dos pendrives e o orçamento disponível. A função deve 
// retornar o preço máximo possível que o usuário pode 
// gastar para comprar um teclado e um pendrive, ou -1 
// se não for possível comprar nenhum par de itens dentro do orçamento.


// export function getMoneySpent(teclados, dispositivos, b) {

//     let maxPreco = -1;

//     teclados.sort((a, b) => b - a);
//     dispositivos.sort((a, b) => b - a);

//     for (let precoTeclado of teclados) {

//         for (let precoDispositivos of dispositivos) {

//             let custoTotal = precoTeclado + precoDispositivos;

//             if (custoTotal > maxPreco && custoTotal <= b) {
                
//                 maxPreco = Math.max(maxPreco, custoTotal);
//             }
            
//         }
        
//     }
    
//     return (maxPreco);

// }

// export function getMoneySpent(teclados, dispositivos, b) {

//     let gasto = -1;
//     let soma = 0;

//     for (let teclado of teclados) {
        
//         for (let dispositivo of dispositivos) {

//             soma = teclados[teclado] + dispositivos[dispositivo]

//             if (soma <= b && soma > gasto) {
                
//                 gasto = soma;
                
//             }
//         }
//     }

//     return gasto;

// }

// export function getMoneySpent(teclado, dispositivo, orcamento) {

//     let valorMax = -1;

//     for(let i = 0; i < teclado.length; i++) {

//         const precoTeclado = teclado[i];

//         for(let j = 0; j < dispositivo.length; j++) {

//             const precoDispositivo = dispositivo[j];

//             if(precoTeclado + precoDispositivo <= orcamento && precoTeclado + precoDispositivo > valorMax) {

//                 valorMax = precoTeclado + precoDispositivo;
//             }
//         }
//     }
//     return valorMax;
  
// }

// export function getMoneySpent(teclados, dispositivos, orcamento) {

//     let valorMax = -1;
//     let custoTotal = 0;

//     for (let i = 0; i < teclados.length; ++i) {
        
//         for (let j = 0; j < dispositivos.length; ++j) {

//             custoTotal = i + j;

//             if (custoTotal > valorMax && custoTotal <= orcamento) 
                
//                 valorMax = custoTotal
            
        
        
//         }
//     }

//     return valorMax
// }

export function getMoneySpent(keyboards, drives, b) {
    let max = -1,
      sum = 0;
    for (let i = 0; i < keyboards.length; ++i) {
      for (let j = 0; j < drives.length; ++j) {
        sum = keyboards[i] + drives[j];
        if (sum <= b && sum > max) {
          max = sum;
        }
      }
    }
    return max;
  }