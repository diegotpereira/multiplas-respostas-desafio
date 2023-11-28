from migratoryBirds import migratoryBirds

if __name__ == '__main__':
    
    arr_contador = int(input().strip())
    
    arr = list(map(int, input().rstrip().split()))
    
    resultado = migratoryBirds(arr)
    
    print(str(resultado) + '\n')