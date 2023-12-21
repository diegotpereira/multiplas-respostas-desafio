from appendAndDelete import appendAndDelete

class TesteAppendAndDelete:
    
    def testeCaso1(self):
        
        s = 'hackerhappy'
        t = 'hackerrank'
        k = 9

        esperado = 'Yes'
        resultado = appendAndDelete(s, t, k)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        s = 'aba'
        t = 'aba'
        k = 7

        esperado = 'Yes'
        resultado = appendAndDelete(s, t, k)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        s = 'aaaaaaaaaa'
        t = 'aaaaa'
        k = 7

        esperado = 'Yes'
        resultado = appendAndDelete(s, t, k)
        
        assert resultado == esperado
        
        
    def testeCaso4(self):
        
        s = 'ashley'
        t = 'ash'
        k = 2

        esperado = 'No'
        resultado = appendAndDelete(s, t, k)
        
        assert resultado == esperado