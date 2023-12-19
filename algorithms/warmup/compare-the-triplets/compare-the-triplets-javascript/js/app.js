

function compareTriplets(a, b) {

    let ponto_a = 0;
    let ponto_b = 0;
    const resultado = [];

    for (let index = 0; index < 3; index++) {
        
        if (a[index] > b[index]) {
            
            ponto_a += 1

        } else if (a[index] < b[index]) {
            
            ponto_b += 1
        }
    }

    resultado.push(ponto_a)
    resultado.push(ponto_b)

    return resultado
}



console.log(compareTriplets([10, 15, 20], [5, 6, 7]));