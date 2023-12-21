from libraryFine import libraryFine

class TesteLibraryFine:
    
    def testeCaso1(self):
        
        d1 = 9
        m1 = 6
        a1 = 2015
        
        d2 = 6
        m2 = 6
        a2 = 2015
        
        esperado = 45
        
        resultado =  libraryFine(d1, m1, a1, d2, m2, a2)
        
        assert resultado == esperado
        
        
    def testeCaso2(self):
        
        d1 = 6
        m1 = 6
        a1 = 2015
        
        d2 = 9
        m2 = 6
        a2 = 2016
        
        esperado = 0
        
        resultado =  libraryFine(d1, m1, a1, d2, m2, a2)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        d1 = 2
        m1 = 7
        a1 = 2015
        
        d2 = 1
        m2 = 2
        a2 = 2014
        
        esperado = 10000
        
        resultado =  libraryFine(d1, m1, a1, d2, m2, a2)
        
        assert resultado == esperado