from simpleArraySum import simpleArraySum

if __name__ == '__main__':

    entrada = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    resultado = simpleArraySum(arr)

    print(str(resultado) + '\n')