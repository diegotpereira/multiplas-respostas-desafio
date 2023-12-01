import static org.junit.Assert.assertEquals;

import java.util.*;

import org.junit.Test;

public class TestePickingNumbers {

    @Test 
    public void testeCaso1() {

        List<Integer> arr = Arrays.asList(4, 6, 5, 3, 3, 1);

        int esperado = 3;

        int resultado = Resultado.pickingNumbers(arr);

        assertEquals(resultado, esperado);
    }

    @Test 
    public void testeCaso2() {

        List<Integer> arr = Arrays.asList(1, 2, 2, 3, 1, 2);

        int esperado = 5;

        int resultado = Resultado.pickingNumbers(arr);

        assertEquals(resultado, esperado);
    }

    @Test 
    public void testeCaso3() {

        List<Integer> arr = Arrays.asList(98, 3, 99, 1, 97, 2);

        int esperado = 2;

        int resultado = Resultado.pickingNumbers(arr);

        assertEquals(resultado, esperado);
    }
    
}
