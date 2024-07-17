
# Importa o módulo random para gerar números aleatórios
import random

# Define a função carrega_palavra_secreta
def carrega_palavra_secreta():

    # Cria uma lista vazia para armazenar as palavras
    palavras = []

    # Caminho do arquivo com barras duplas
    caminho = "C:\\Users\\Suporte\\Documents\\Repositorio\\multiplas-respostas-desafio\\algorithms\\implementation\\strange-code\\strange-code-python\\tests\\palavras.txt"

    # Abre o arquivo palavras.txt em modo de leitura com codificação UTF-8
    with open(caminho, "r", encoding="UTF-8") as arquivo:

        # Itera por cada linha do arquivo
        for linha in arquivo:

            # Remove espaços em branco do início e do fim da linha
            linha = linha.strip()

            # Adiciona a palavra processada à lista de palavras
            palavras.append(linha)


    # Gera um número aleatório entre 0 e o tamanho da lista de palavras menos 1
    numero = random.randrange(0, len(palavras))

    # Seleciona uma palavra aleatória da lista e a converte para maiúsculas
    palavra_secreta = palavras[numero].upper()

    # Retorna a palavra secreta
    return palavra_secreta