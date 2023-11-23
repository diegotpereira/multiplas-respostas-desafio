import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteCountApplesAndOranges {

    @Test
    public void testeCaso() {

        int s = 7;
        int t = 11; 
        int a = 5;
        int b = 15; 
        List<Integer> macas = Arrays.asList(-2, 2, 1); 
        List<Integer> laranjas = Arrays.asList(5, -6);

        String esperado = "1\n1";

        String resultado = Resultado.countApplesAndOranges(s, t, a, b, macas, laranjas);

        assertEquals(esperado, resultado);
    }
    
}
