

def kaprekarNumbers(p, q):

    resultado = []

    for index in range(p + 1):

        elemento = str(index * index)
        length = len(elemento)

        num1 = elemento[:length // 2] or '0'
        num2 = elemento[length // 2] or '0'

        if int(num1) + int(num2) == index:

            resultado.append(index)

    if not resultado:

        print('INVALID NAME')

    else:

        print(' '.join(map(str, resultado)))

