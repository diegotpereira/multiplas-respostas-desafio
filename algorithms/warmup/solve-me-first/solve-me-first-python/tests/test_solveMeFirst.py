from solveMeFirst import solveMeFirst

class TesteSolveMeFirst:

    def testeCaso1(self):

        num1 = 5
        num2 = 5

        esperado = 10

        resultado = solveMeFirst(num1, num2)

        assert resultado == esperado