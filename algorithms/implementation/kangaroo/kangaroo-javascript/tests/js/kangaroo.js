export function kangaroo(posicao_inicial_primeiro_canguru, velocidade_inicial_primeiro_canguru, posicao_inicial_segundo_canguru, velocidade_inicial_segundo_canguru) {

    let string = 'NO'

    if (velocidade_inicial_primeiro_canguru > velocidade_inicial_segundo_canguru) {

        if ((posicao_inicial_segundo_canguru - posicao_inicial_primeiro_canguru) % (velocidade_inicial_primeiro_canguru - velocidade_inicial_segundo_canguru) == 0) {

            return string = "YES";
        }
        

        return string = "NO"
    }
        
        
    

    return string;
    
}