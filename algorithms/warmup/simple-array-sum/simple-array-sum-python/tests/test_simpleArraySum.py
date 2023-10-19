from simpleArraySum import simpleArraySum

class TesteSimpleArraySum:

    def testeCaso1(self):

        arr = [1, 2, 3, 4, 10, 11]
        esperado = 31

        resultado = simpleArraySum(arr)

        assert resultado == esperado


    def testeCaso2(self):

        arr = [338, 65, 713, 595, 428, 610, 728, 573, 871, 868]
        esperado = 5789

        resultado = simpleArraySum(arr)

        assert resultado == esperado