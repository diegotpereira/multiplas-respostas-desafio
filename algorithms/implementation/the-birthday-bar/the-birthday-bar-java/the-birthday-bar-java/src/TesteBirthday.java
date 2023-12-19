import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteBirthday {
    
    @Test
    public void testeCaso1() {

        List<Integer> s = Arrays.asList(1, 2, 1, 3, 2); 
        int d = 3; 
        int m = 2;

        int esperado = 2;

        int resultado = Resultado.birthday(s, d, m);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso2() {

        List<Integer> s = Arrays.asList(1, 1, 1, 1, 1, 1); 
        int d = 3; 
        int m = 2;

        int esperado = 0;

        int resultado = Resultado.birthday(s, d, m);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso3() {

        List<Integer> s = Arrays.asList(4); 
        int d = 4; 
        int m = 1;

        int esperado = 1;

        int resultado = Resultado.birthday(s, d, m);

        assertEquals(esperado, resultado);
    }
}
