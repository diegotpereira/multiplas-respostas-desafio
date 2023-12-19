from designerPdfViewer import designerPdfViewer

class TesteDesignerPdfViewer:
    
    def testeCaso1(self):
        
        h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
        palavra = 'zaba'
        
        esperado = 28
        
        resultado = designerPdfViewer(h, palavra)
        
        assert resultado == esperado
        
    def testeCaso2(self):
        
        h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
        palavra = 'abc'
        
        esperado = 9
        
        resultado = designerPdfViewer(h, palavra)
        
        assert resultado == esperado
        
    def testeCaso3(self):
        
        h = [6, 5, 7, 3, 6, 7, 3, 4, 4, 2, 3, 7, 1, 3, 7, 4, 6, 1, 2, 4, 3, 3, 1, 1, 3, 5]
        palavra = 'zbkkfhwplj'
        
        esperado = 70
        
        resultado = designerPdfViewer(h, palavra)
        
        assert resultado == esperado