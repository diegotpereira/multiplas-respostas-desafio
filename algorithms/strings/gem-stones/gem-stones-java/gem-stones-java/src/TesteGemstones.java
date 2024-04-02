import static org.junit.Assert.assertEquals;

import java.util.*;

import org.junit.Test;

public class TesteGemstones {
    
    @Test
    public void testeCaso1() {

        List<String> arr = Arrays.asList("abcdde", "baccd", "eeabg");

        int esperado = 2;
        
        int resultado = Resultado.gemstones(arr);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso2() {

        List<String> arr = Arrays.asList("basdfj", "asdlkjfdjsa", "bnafvfnsd", "oafhdlasd");

        int esperado = 4;
        
        int resultado = Resultado.gemstones(arr);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso3() {

        List<String> arr = Arrays.asList("vtrjvgbj", "mkmjyaeav", "sibzdmsk");

        int esperado = 0;
        
        int resultado = Resultado.gemstones(arr);

        assertEquals(esperado, resultado);
    }
}
