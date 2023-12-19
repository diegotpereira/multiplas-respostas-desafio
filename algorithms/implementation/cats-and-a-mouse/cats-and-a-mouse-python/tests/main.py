

if __name__ == '__main__':
    
    n = int(input())
    
    for _ in range(n):
        
        xyz = input().split()
        
        x = int(xyz[0])
        y = int(xyz[1])
        z = int(xyz[2])
        
        resultado = catAndMouse(x, y, z)
        
        print(resultado + '\n')