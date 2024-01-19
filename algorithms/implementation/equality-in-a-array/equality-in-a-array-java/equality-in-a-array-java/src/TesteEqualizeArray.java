import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteEqualizeArray {

    @Test
    public void testeCaso1() {

        List<Integer> arr = Arrays.asList(3, 3, 2, 1, 3);

        int esperado = 2;

        int resultado = Resultado.equalizeArray(arr);

        assertEquals(esperado, resultado);
    }
    
    @Test
    public void testeCaso2() {

        List<Integer> arr = Arrays.asList(1, 2, 3, 1, 2, 3, 3, 3);

        int esperado = 4;

        int resultado = Resultado.equalizeArray(arr);

        assertEquals(esperado, resultado);
    }
}
