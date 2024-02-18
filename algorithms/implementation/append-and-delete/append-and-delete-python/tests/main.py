from appendAndDelete import appendAndDelete


if __name__ == '__main__':
    
    s = input()
    
    t = input()
    
    k = int(input().strip())
    
    resultado = appendAndDelete(s, t, k)
    
    print(resultado + '\n')