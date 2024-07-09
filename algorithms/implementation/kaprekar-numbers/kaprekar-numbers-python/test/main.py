from kaprekarNumbers import kaprekarNumbers

p = 1
q = 100

if __name__ == '__main__':

    p = int(input().strip())
    q = int(input().strip())

    resultado = kaprekarNumbers(p, q)

    print(resultado)