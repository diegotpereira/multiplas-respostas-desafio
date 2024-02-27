import static org.junit.Assert.assertEquals;

import java.util.*;
import org.junit.Test;

public class TesteInsertionSort1 {

    @Test
    public void testeCaso1() {

        int n = 5;
        List<Integer> arr = Arrays.asList(2, 4, 6, 8, 3);
        List<Integer> resultado = Resultado.insertionSort1(n, arr);
        List<Integer> esperado = Arrays.asList(2, 3, 4, 6, 8);

        assertEquals(resultado, esperado);
    }
    
}
