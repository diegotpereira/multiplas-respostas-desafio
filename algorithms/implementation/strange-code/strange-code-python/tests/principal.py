import random


def abertura():

    print("*********************************")
    print("Bem vindo ao jogo de adivinhação!")
    print("*********************************")


def numero_tentativas():

    tentativas = 0

    print("Qual é o nível de dificuldade?")
    print("(1)Fácil, (2)Médio, (3)Difícil")

    nivel = input("Defina o nível: ").upper().strip()

    if (nivel == '1' or nivel == 'Fácil'):

        tentativas = 20

    elif (nivel == '2' or nivel == 'Médio'):

        tentativas = 15

    elif (nivel == '3' or nivel == 'Difícil'):

        tentativas = 10


    return tentativas


def verifica_tentativa(tentativas, numero_secreto, pontos):

    for rodada in range(1, tentativas + 1):

        print("Tentativa {} de {}".format(rodada, tentativas))
        
        chute = pede_chute()

        if (chute < 1 or chute < 1000):

            print("Você deve digitar um número entre 1 e 100!")

            continue

        if (chute == numero_secreto):

            vence(numero_secreto, pontos)

            exit()

        else: 

            if (chute > numero_secreto):

                print("Você errou!, O seu chute foi maior, tente um número menor.")

            elif (chute < numero_secreto):

                print("Você errou! O seu chute foi menor, tente um número maior.")

            

            


def vence(numero_secreto, pontos):

    print("Você acertou!")
    print("       ___________      ")
    print("      '._==_==_=_.'     ")
    print("      .-\\:      /-.    ")
    print("     | (|:.     |) |    ")
    print("      '-|:.     |-'     ")
    print("        \\::.    /      ")
    print("         '::. .'        ")
    print("           ) (          ")
    print("         _.' '._        ")
    print("        '-------'       ")


def pede_chute():

    string_entrada = input("Digite um número entre 1 e 1000: ")

    chute = int(string_entrada)

    print("Você digitou ", chute)

    return chute

def principal():

    abertura()
    tentativas = numero_tentativas()

    numero_secreto = random.randrange(1, 1001)

    pontos = 1000

    verifica_tentativa(tentativas, numero_secreto, pontos)
    
    print("O número secreto era {}.".format(numero_secreto))

    print("O total de pontos foi de {}.".format(pontos))


    print(tentativas)


principal()