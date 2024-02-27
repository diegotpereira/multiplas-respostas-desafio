import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteIntroTutorial {

    @Test
    public void testeCaso1() {

        int V = 3;
        List<Integer> arr = Arrays.asList(1, 2, 3);
        
        int esperado = 2;
        
        int resultado = Resultado.introTutorial(V, arr);

        assertEquals(esperado, resultado);
    }
    
    @Test
    public void testeCaso2() {

        int V = 4;
        List<Integer> arr = Arrays.asList(1, 4, 5, 7, 9, 12);
        
        int esperado = 1;
        
        int resultado = Resultado.introTutorial(V, arr);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso3() {

        int V = 23;
        List<Integer> arr = Arrays.asList(1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23);
        
        int esperado = 11;
        
        int resultado = Resultado.introTutorial(V, arr);

        assertEquals(esperado, resultado);
    }
}
