from strangeCounter import strangeCounter

class TesteStrangerCounter:
    
    def testeCaso1(self):

        t = 4

        esperado = 6

        resultado = strangeCounter(t)

        assert resultado == esperado


    def testeCaso2(self):

        t = 17

        esperado = 5

        resultado = strangeCounter(t)

        assert resultado == esperado