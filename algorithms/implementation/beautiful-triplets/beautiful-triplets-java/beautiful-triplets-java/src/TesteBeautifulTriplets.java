import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteBeautifulTriplets {
    
    @Test
    public void testeCaso1() {

        int d = 3;
        List<Integer> arr = Arrays.asList(1, 2, 4, 5, 7, 8, 10);

        int esperado = 3;

        int resultado = Resultado.beautifulTriplets(d, arr);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso2() {

        int d = 3;
        List<Integer> arr = Arrays.asList(1, 6, 7, 7, 8, 10, 12, 13, 14, 19);

        int esperado = 2;

        int resultado = Resultado.beautifulTriplets(d, arr);

        assertEquals(resultado, esperado);
    }
}
