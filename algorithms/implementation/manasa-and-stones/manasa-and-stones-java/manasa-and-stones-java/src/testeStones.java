import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class testeStones {

    @Test
    public void testeCaso1() {

        int n = 3;
        int a = 1;
        int b = 2;
        
        List<Integer> esperado = Arrays.asList(2, 3, 4);
        
        List<Integer> resultado = Resultado.stones(n, a, b);

        assertEquals(resultado, esperado);
    }
    
    @Test
    public void testeCaso2() {

        int n = 4;
        int a = 10;
        int b = 100;
        
        List<Integer> esperado = Arrays.asList(30, 120, 210, 300);
        
        List<Integer> resultado = Resultado.stones(n, a, b);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso3() {

        int n = 7;
        int a = 9;
        int b = 11;
        
        List<Integer> esperado = Arrays.asList(54, 56, 58, 60, 62, 64, 66);
        
        List<Integer> resultado = Resultado.stones(n, a, b);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso4() {

        int n = 4;
        int a = 8;
        int b = 16;
        
        List<Integer> esperado = Arrays.asList(24, 32, 40, 48);
        
        List<Integer> resultado = Resultado.stones(n, a, b);

        assertEquals(resultado, esperado);
    }
}
