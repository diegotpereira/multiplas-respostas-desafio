import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteAngryProfessor {

    @Test
    public void testeCaso1() {

        int k = 3;
        List<Integer> a = Arrays.asList(-1, -3, 4, 2);
        String esperado = "YES";

        String resultado = Resultado.angryProfessor(k, a);

        assertEquals(resultado, esperado);
        
    }

    @Test
    public void testeCaso2() {

        int k = 2;
        List<Integer> a = Arrays.asList(0, -1, 2, 1);
        String esperado = "NO";
        
        String resultado = Resultado.angryProfessor(k, a);

        assertEquals(resultado, esperado);
        
    }
    
}
