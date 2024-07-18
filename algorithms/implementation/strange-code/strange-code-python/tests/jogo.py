from carrega_palavra_secreta import carrega_palavra_secreta
from inicializa_letras_acertadas import inicializa_letras_acertadas
from pede_chute import pede_chute
from marca_chute_correto import marca_chute_correto
from mensagem_vencedor import mensagem_vencedor
from mensagem_perdedor import mensagem_perdedor
from desenha_Forca import desenha_forca

def jogo():

    palavra_secreta = carrega_palavra_secreta()

    letras_acertadas = inicializa_letras_acertadas(palavra_secreta)

    enforcou = False
    acertou = False
    erros = 0

    letras_faltando = len(letras_acertadas)

    print(letras_acertadas)

    while (not acertou and not enforcou):

        chute = pede_chute()

        if(chute in palavra_secreta):

            marca_chute_correto(chute, letras_acertadas, palavra_secreta)

            letras_faltando = str(letras_acertadas.count('_'))

            if(letras_faltando == "0"):

                print("PARABÉNS!! Você encontrou todas as letras formando a palavra '{}'".format(palavra_secreta.upper()))

            else:

                erros += 1

                print(letras_acertadas)

                print('Ainda faltam {} letras'.format(letras_faltando))

                print('Você ainda tem {} tentativas'.format(7-erros))

                desenha_forca(erros)

            enforcou = erros == 7
            acertou = "_" not in letras_acertadas

            print(letras_acertadas)


    if(acertou):

        mensagem_vencedor()

    else:

        mensagem_perdedor(palavra_secreta)

    
    print("Fim do Jogo")

            


    
    