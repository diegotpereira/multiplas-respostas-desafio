import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteMaximumPerimeterTriangle {
    
    @Test
    public void testeCaso1() {

        List<Integer> sticks = Arrays.asList(1, 1, 1, 3, 3);
        List<Integer> esperado = Arrays.asList(1, 3, 3);
        List<Integer> resultado = Resultado.maximumPerimeterTriangle(sticks);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso2() {

        List<Integer> sticks = Arrays.asList(1, 2, 3);
        List<Integer> esperado = Arrays.asList(-1);
        List<Integer> resultado = Resultado.maximumPerimeterTriangle(sticks);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso3() {

        List<Integer> sticks = Arrays.asList(1, 1, 1, 2, 3, 5);
        List<Integer> esperado = Arrays.asList(1, 1, 1);
        List<Integer> resultado = Resultado.maximumPerimeterTriangle(sticks);

        assertEquals(resultado, esperado);
    }
}
