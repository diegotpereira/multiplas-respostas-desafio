# // O problema "Bon Appétit" no HackerRank 
# // consiste em calcular a divisão justa do 
# // custo de uma refeição entre dois amigos. A situação é a seguinte:

# // Um grupo de amigos pede uma refeição em um restaurante.
# // Cada item do menu tem um custo associado.
# // Um dos amigos, Anna, está alérgica a alguns alimentos 
# // e não os consome. Ela não deve pagar por esses itens.
# // Os amigos decidem dividir igualmente o custo total da 
# // refeição entre eles, exceto os itens que Anna não consome.
# // A tarefa é determinar se a divisão foi feita corretamente 
# // e, se não, calcular o valor que Anna deve reembolsar ao outro amigo.
# // Os inputs do problema incluem o custo total da refeição, 
# // uma lista de preços dos itens no menu, o índice do item que 
# // Anna não consome e o valor pago por Anna. A saída esperada é 
# // "Bon Appetit" se a divisão for justa ou o valor que Anna deve reembolsar se a divisão não for justa.


# # Função bonAppetit que calcula se a divisão da conta é justa ou o valor que Anna deve reembolsar

# def bonAppetit(conta, k, b):
    
#     # Inicializa a variável para armazenar o total da conta
#     totalConta = 0
    
#     # Itera sobre os itens da conta e soma seus valores
#     for i in range(len(conta)):
        
#         totalConta += conta[i]
        
#     # Verifica se a divisão da conta é justa
#     if((totalConta - conta[k]) / 2 == b):
        
#         # Retorna uma mensagem indicando que a divisão é justa
#         return 'Bon Appetit'
    
#     else:
        
#         # Retorna o valor que Anna deve reembolsar, arredondado
#         return round(b - (totalConta - conta[k]) / 2)

# Função que verifica se a divisão da conta é justa após a recusa de pagamento de um item específico

def bonAppetit(conta, k, b):
    
    # Inicializa a variável para armazenar o total da conta
    total_conta = 0
    
    # Itera sobre os itens da conta usando enumerate para obter índices e valores
    for i, amt in enumerate(conta):
        
        # Verifica se o índice não é igual a k (o item recusado por Anna)
        if i != k:
            
            # Soma o valor do item à variável total_conta
            total_conta += amt
            
    # Calcula a metade da conta após a recusa do item no índice k
    total_conta = total_conta / 2
    
    # Verifica se o valor inicial (b) é maior que a metade da conta
    if b > total_conta:
        
        # Retorna a diferença entre b e a metade da conta, convertendo para inteiro
        return int(b - total_conta)
    
    else:
        
        # Se a divisão for justa ou b for menor ou igual à metade da conta, retorna a mensagem "Bon Appetit"
        return ('Bon Appetit')

