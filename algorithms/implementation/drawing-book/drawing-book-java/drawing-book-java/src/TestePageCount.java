import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TestePageCount {
    
    @Test
    public void testeCaso1() {

        int totalPaginas = 5;
        int paginaDestino = 4;

        int esperado = 0;

        int resultado = Resultado.pageCount(totalPaginas, paginaDestino);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso2() {

        int totalPaginas = 6;
        int paginaDestino = 2;

        int esperado = 1;

        int resultado = Resultado.pageCount(totalPaginas, paginaDestino);

        assertEquals(esperado, resultado);
    }
}
