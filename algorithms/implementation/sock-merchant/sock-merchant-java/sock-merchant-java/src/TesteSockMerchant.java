import static org.junit.Assert.assertEquals;

import java.util.*;
import org.junit.Test;

public class TesteSockMerchant {
    
    @Test
    public void testeCaso1() {

        int n = 9;
        List<Integer> ar = Arrays.asList(10, 20, 20, 10, 10, 30, 50, 10, 20);
        int esperado = 3;

        int resultado = Resultado.sockMerchant(n, ar);

        assertEquals(esperado, resultado);

    }

    @Test
    public void testeCaso2() {

        int n = 10;
        List<Integer> ar = Arrays.asList(1, 1, 3, 1, 2, 1, 3, 3, 3, 3);
        int esperado = 4;

        int resultado = Resultado.sockMerchant(n, ar);

        assertEquals(esperado, resultado);

    }

    @Test
    public void testeCaso3() {

        int n = 15;
        List<Integer> ar = Arrays.asList(6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5);
        int esperado = 6;

        int resultado = Resultado.sockMerchant(n, ar);

        assertEquals(esperado, resultado);

    }

    @Test
    public void testeCaso4() {

        int n = 20;
        List<Integer> ar = Arrays.asList(4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5);
        int esperado = 9;

        int resultado = Resultado.sockMerchant(n, ar);

        assertEquals(esperado, resultado);

    }
}
