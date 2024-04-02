

from twoStrings import twoStrings

class TesteTwoStrings:
    
    def testeCaso1(self):
        
        s1 = 'hello'
        s2 = 'world'
        esperado = 'YES'
        
        resultado = twoStrings(s1, s2)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        s1 = 'wouldyoulikefries'
        s2 = 'abcabcabcabcabcabc'
        esperado = 'NO'
        
        resultado = twoStrings(s1, s2)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        s1 = 'hi'
        s2 = 'world'
        esperado = 'NO'
        
        resultado = twoStrings(s1, s2)
        
        assert resultado == esperado