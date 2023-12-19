

from gradingStudents import gradingStudents

class TesteGradingStudents:
    
    def testeCaso1(self):
        
        grades = [73, 67, 38, 33]
        
        esperado = [75, 67, 40, 33]
        
        resultado = gradingStudents(grades)
        
        assert resultado == esperado
        
        
    def testeCaso2(self):
        
        grades = [37, 38]
        
        esperado = [37, 40]
        
        resultado = gradingStudents(grades)
        
        assert resultado == esperado