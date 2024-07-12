

def kaprekarNumbers(p, q):

    resultado = []

    for index in range(p, q + 1):

        if index == 1:

            resultado.append(1)
            continue 

        elemento = str(index ** 2)
        length = len(elemento) - len(str(index))

        num1 = ''.join(elemento[:length])
        num2 = ''.join(elemento[length:])

        if num1 and num2:

            if int(num1) + int(num2) == index:
                
                resultado.append(index)

    if len(resultado) == 0:

        return('INVALID RANGE')

    else:

        return ' '.join(map(str, resultado))

