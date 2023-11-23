import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteGradingStudents {

    @Test
    public void testeCaso1() {

        List<Integer> grades = Arrays.asList(37, 38);

        List<Integer> esperado = Arrays.asList(37, 40);

        List<Integer> resultado = Resultado.gradingStudents(grades);

        assertEquals(esperado, resultado);
        

    }

    @Test
    public void testeCaso2() {

        List<Integer> grades = Arrays.asList(73, 67, 38, 33);

        List<Integer> esperado = Arrays.asList(75, 67, 40, 33);

        List<Integer> resultado = Resultado.gradingStudents(grades);

        assertEquals(esperado, resultado);
        

    }
    
}
