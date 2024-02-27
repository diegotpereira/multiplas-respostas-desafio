# O problema "Time Conversion" no HackerRank 
# pede para converter um formato de hora no 
# formato de 12 horas para o formato de 24 horas.

# A entrada é uma string representando a hora 
# no formato de 12 horas, por exemplo, "07:05:45PM". 
# A tarefa é converter essa hora para o formato de 24 horas, 
# que seria "19:05:45".

# As possíveis entradas são no formato "hh:mm:ssAM" ou "hh:mm:ssPM", onde:

# hh: Representa a hora em formato de 2 dígitos (01 a 12).
# mm: Representa os minutos em formato de 2 dígitos (00 a 59).
# ss: Representa os segundos em formato de 2 dígitos (00 a 59).
# AM ou PM: Indica se é antes ou depois do meio-dia.
# A saída esperada é a hora no formato de 24 horas.

def timeConversion(s):

    # Separa a string em parte de tempo e período (AM ou PM)
    tempo = s[:-2]
    periodo =  s[-2:]

    print("o tempo é: " + tempo)
    print("O periodo é " + periodo)

    # Extrai hora, minuto e segundo da parte de tempo
    hora, minuto, segundo = map(int, tempo.split(":"))

    # Converte para o formato de 24 horas, considerando o período
    if periodo == "PM" and hora != 12:

        hora += 12

    elif periodo == "AM" and hora == 12:

        hora = 0

    # Formata a saída no formato desejado
    return "{:02d}:{:02d}:{:02d}".format(hora, minuto, segundo)

# def timeConversion(s):

#     s = list(s)

#     letra = s[]

    

#     print(s)

#     return


if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')
    s = "lista"

    # s = input()

    result = timeConversion(s)
    print(result)

 