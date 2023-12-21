import static org.junit.Assert.assertEquals;

import java.util.*;

import org.junit.Test;

public class TesteCutTheSticks {

    @Test
    public void testeCaso1() {

        List<Integer> arr = Arrays.asList(5, 4, 4, 2, 2, 8);

        List<Integer> esperado = Arrays.asList(6, 4, 2, 1);

        List<Integer> resultado = Resultado.cutTheSticks(arr);

        assertEquals(resultado, esperado);
    }
    
}
