from gradingStudents import gradingStudents

if __name__ == '__main__':
    
    n = int(input().strip())
    
    grades = []
    
    for _ in range(n):
        
        grades_item = int(input().strip())
        
        grades.append(grades_item)
        
    resultado = gradingStudents(grades)
    
    print('\n'.join(map(str, resultado)))
    print('\n')