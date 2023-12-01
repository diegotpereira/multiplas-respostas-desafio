import static org.junit.Assert.assertEquals;

import java.util.*;
import org.junit.Test;

public class TesteDesignerPdfViewer {

    @Test
    public void testeCaso1() {

        List<Integer> h = Arrays.asList(1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7);
        String palavra = "zaba";
        int esperado = 28;

        int resultado = Resultado.designerPdfViewer(h, palavra);

        assertEquals(resultado, esperado);
    }
    
    @Test
    public void testeCaso2() {

        List<Integer> h = Arrays.asList(1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
        String palavra = "abc";
        int esperado = 9;

        int resultado = Resultado.designerPdfViewer(h, palavra);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso3() {

        List<Integer> h = Arrays.asList(6, 5, 7, 3, 6, 7, 3, 4, 4, 2, 3, 7, 1, 3, 7, 4, 6, 1, 2, 4, 3, 3, 1, 1, 3, 5);
        String palavra = "zbkkfhwplj";
        int esperado = 70;

        int resultado = Resultado.designerPdfViewer(h, palavra);

        assertEquals(resultado, esperado);
    }
}
