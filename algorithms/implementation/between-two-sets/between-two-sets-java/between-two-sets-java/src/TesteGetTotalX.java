import static org.junit.Assert.assertEquals;

import java.util.*;

import org.junit.Test;

public class TesteGetTotalX {

    @Test
    public void testeCaso1() {

        List<Integer> arr = Arrays.asList(2, 4);
        List<Integer> brr = Arrays.asList(16, 32, 96);

        int esperado = 3;

        int resultado = Resultado.getTotalX(arr, brr);

        assertEquals(esperado, resultado);

    }
    
    @Test
    public void testeCaso2() {

        List<Integer> arr = Arrays.asList(100, 99, 98, 97, 96, 95, 94, 93, 92, 91);
        List<Integer> brr = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        int esperado = 0;

        int resultado = Resultado.getTotalX(arr, brr);

        assertEquals(esperado, resultado);

    }

    @Test
    public void testeCaso3() {

        List<Integer> arr = Arrays.asList(2);
        List<Integer> brr = Arrays.asList(20, 30, 12);

        int esperado = 1;

        int resultado = Resultado.getTotalX(arr, brr);

        assertEquals(esperado, resultado);

    }

    @Test
    public void testeCaso4() {

        List<Integer> arr = Arrays.asList(3, 9, 6);
        List<Integer> brr = Arrays.asList(36, 72);

        int esperado = 2;

        int resultado = Resultado.getTotalX(arr, brr);

        assertEquals(esperado, resultado);

    }
}
