from insertionsort1 import insertionsort1

if __name__ == '__main__':
    
    n = int(input().strip())
    arr = list(map(list(int, input().rstrip().split())))
    
    resultado = insertionsort1(n, arr)