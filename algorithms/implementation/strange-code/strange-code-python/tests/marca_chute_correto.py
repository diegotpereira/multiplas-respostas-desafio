

def marca_chute_correto(chute, letras_acertadas, palavra_secreta):

    index = 0

    for letra in palavra_secreta:

        if (chute == letra):

            print("Você acertou a letra!")

            letras_acertadas[index] = letra

        else:

            print("Você errou a letra!")

        index += 1