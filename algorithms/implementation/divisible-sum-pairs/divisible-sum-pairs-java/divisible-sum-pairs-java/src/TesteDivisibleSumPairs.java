import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteDivisibleSumPairs {

    @Test
    public void testeCaso1() {

        int n = 6; int k = 3; List<Integer> ar = Arrays.asList(1, 3, 2, 6, 1, 2);

        int esperado = 5;

        int resultado = Resultado.divisibleSumPairs(n, k, ar);

        assertEquals(esperado, resultado);
    }
    
    @Test
    public void testeCaso2() {

        int n = 2; int k = 2; List<Integer> ar = Arrays.asList(8, 10);

        int esperado = 1;

        int resultado = Resultado.divisibleSumPairs(n, k, ar);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso3() {

        int n = 5; int k = 2; List<Integer> ar = Arrays.asList(5, 9, 10, 7, 4);

        int esperado = 4;

        int resultado = Resultado.divisibleSumPairs(n, k, ar);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso4() {

        int n = 5; int k = 3; List<Integer> ar = Arrays.asList(2, 8, 6, 8, 4);

        int esperado = 3;

        int resultado = Resultado.divisibleSumPairs(n, k, ar);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso5() {

        int n = 10; int k = 3; List<Integer> ar = Arrays.asList(29, 97, 52, 86, 27, 89, 77, 19, 99, 96);

        int esperado = 15;

        int resultado = Resultado.divisibleSumPairs(n, k, ar);

        assertEquals(esperado, resultado);
    }
}
