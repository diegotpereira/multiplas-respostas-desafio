import static org.junit.Assert.assertEquals;

import java.util.*;

import org.junit.Test;

public class TestWorkbook {
    
    @Test
    public void testeCaso1() {

        int n = 5;
        int k = 3;
        List<Integer>arr = Arrays.asList(4, 2, 6, 1, 10);
        
        int esperado = 4;
        
        int resultado = Resultado.workbook(n, k, arr);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso2() {

        int n = 10;
        int k = 5;
        List<Integer>arr = Arrays.asList(3, 8, 15, 11, 14, 1, 9, 2, 24, 31);
        
        int esperado = 8;
        
        int resultado = Resultado.workbook(n, k, arr);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso3() {

        int n = 15;
        int k = 20;
        List<Integer>arr = Arrays.asList(1, 8, 19, 15, 2, 29, 3, 2, 25, 2, 19, 26, 17, 33, 22);
        
        int esperado = 11;
        
        int resultado = Resultado.workbook(n, k, arr);

        assertEquals(esperado, resultado);
    }
}
