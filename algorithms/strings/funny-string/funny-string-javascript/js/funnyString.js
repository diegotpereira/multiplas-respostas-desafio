// # A tarefa do problema "Funny String" do HackerRank 
// # é determinar se uma string é engraçada ou não. 
// # Uma string é considerada engraçada se a diferença 
// # absoluta entre as classificações dos caracteres 
// # adjacentes na string original é igual à diferença 
// # absoluta entre as classificações dos caracteres 
// # adjacentes na string reversa.

export function funnyString(s) {
    
    for (let index = 0; index < s.length - 1; index++) {
        
        if (Math.abs(s.charCodeAt(index) - s.charCodeAt(index + 1)) !== Math.abs(s.charCodeAt(s.length - index - 1) - s.charCodeAt(s.length - index - 2))) {
            
            return "Not Funny";

        }
        
    }

    return "Funny";
}