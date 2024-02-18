import static org.junit.Assert.assertEquals;

import java.util.*;

import org.junit.Test;

public class TesteCircularArrayRotation {
    
    @Test
    public void testeCaso1() {

        List<Integer> a = Arrays.asList(1, 2, 3);
        int k = 2;
        List<Integer> consultas = Arrays.asList(0, 1, 2);

        List<Integer> esperado = Arrays.asList(2, 3, 1);

        List<Integer> resultado = Resultado.circularArrayRotation(a, k, consultas);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso2() {

        List<Integer> a = Arrays.asList(3, 4, 5);
        int k = 2;
        List<Integer> consultas = Arrays.asList(1, 2);

        List<Integer> esperado = Arrays.asList(5, 3);

        List<Integer> resultado = Resultado.circularArrayRotation(a, k, consultas);

        assertEquals(resultado, esperado);
    }


}
