from taumBday import taumBday

class TesteTaumBday:
    
    def testeCaso1(self):
        
        b = 10
        w = 10
        bc = 1
        wc = 1
        z = 1
        
        esperado = 20
        
        resultado = taumBday(b, w, bc, wc, z)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        b = 5
        w = 9
        bc = 2
        wc = 3
        z = 4
        
        esperado = 37
        
        resultado = taumBday(b, w, bc, wc, z)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        b = 3
        w = 6
        bc = 9
        wc = 1
        z = 1
        
        esperado = 12
        
        resultado = taumBday(b, w, bc, wc, z)
        
        assert resultado == esperado
        
        
    def testeCaso4(self):
        
        b = 7
        w = 7
        bc = 4
        wc = 2
        z = 1
        
        esperado = 35
        
        resultado = taumBday(b, w, bc, wc, z)
        
        assert resultado == esperado
        
        
    def testeCaso5(self):
        
        b = 3
        w = 3
        bc = 1
        wc = 9
        z = 2
        
        esperado = 12
        
        resultado = taumBday(b, w, bc, wc, z)
        
        assert resultado == esperado