

from staircase import staircase

class TesteStaircase:

    def testeCaso1(self):

        n = 6

        esperado = "     #\n    ##\n   ###\n  ####\n #####\n######"

        resultado = staircase(n)

        assert resultado == esperado


    def testeCaso2(self):

        n = 8

        esperado = "       #\n      ##\n     ###\n    ####\n   #####\n  ######\n #######\n########"

        resultado = staircase(n)

        assert resultado == esperado




        