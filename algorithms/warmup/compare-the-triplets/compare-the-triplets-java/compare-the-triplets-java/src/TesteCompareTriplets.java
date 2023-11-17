import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteCompareTriplets {

    @Test
    public void testeCaso1() {

        List<Integer> a = Arrays.asList(5, 6, 7);
        List<Integer> b = Arrays.asList(3, 6, 10);

        List<Integer> esperado = Arrays.asList(1, 1);

        List<Integer> resultado = Resultado.compareTriplets(a, b);

        assertEquals(esperado, resultado);


    }
    
}
