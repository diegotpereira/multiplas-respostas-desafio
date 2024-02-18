

export function timeConversion(s) {
    
    let tempo = s.substring(0, s.length - 2);
    let periodo = s.substring(s.length - 2);

    let tempoArray = tempo.split(":")

    let hora = parseInt(tempoArray[0]);
    let minuto = parseInt(tempoArray[1]);
    let segundo = parseInt(tempoArray[2]);

    if (periodo == "PM" && hora != 12) {
        
        hora += 12;

    } else if (periodo == "AM" && hora == 12) {
        
        hora = 0;
    }

    return sprintf("%02d:%02d:%02d", hora, minuto, segundo);
}