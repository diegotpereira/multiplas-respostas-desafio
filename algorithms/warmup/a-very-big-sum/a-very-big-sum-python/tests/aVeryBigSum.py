# A tarefa do problema é somar todos os números inteiros fornecidos na entrada padrão. Como os números podem ser muito grandes, o problema restringe o valor máximo de cada número a 10^9.

# A função a ser implementada é aVeryBigSum(int n, vector<int> &ar), onde:

# n é um inteiro representando o número de elementos no array ar.
# ar é um array de inteiros.
# A função deve retornar a soma de todos os números no array ar.

# def aVeryBigSum(ar):
    
#     return sum(ar)


def aVeryBigSum(ar):
    
    """
    Soma todos os elementos de um array de números inteiros ar.

    Parâmetros:
    ar (list): Uma lista contendo números inteiros.

    Retorna:
    int: A soma de todos os elementos de ar.
    """
    soma = 0
    
    for i in ar:
        
        # Adiciona cada elemento do array à variável soma
        soma += i
        
    return soma