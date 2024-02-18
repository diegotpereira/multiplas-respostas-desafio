import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteCavityMap {

    @Test
    public void testeCaso1() {

        List<String> grade = Arrays.asList("989", "191", "111");
        List<String> esperado = Arrays.asList("989", "1X1", "111");
        List<String> resultado = Resultado.cavityMap(grade);

        assertEquals(resultado, esperado);
    }
    
}
