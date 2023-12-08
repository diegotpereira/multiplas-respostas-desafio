import org.junit.Test;

public class TesteUtopianTree {

    @Test
    public void testeCaso1() {

        int n = 0;
        int esperado = 1;

        int resultado = Resultado.utopianTree(n);

        assert resultado == esperado;
    }

    @Test
    public void testeCaso2() {

        int n = 1;
        int esperado = 2;

        int resultado = Resultado.utopianTree(n);

        assert resultado == esperado;
    }

    @Test
    public void testeCaso3() {

        int n = 4;
        int esperado = 7;

        int resultado = Resultado.utopianTree(n);

        assert resultado == esperado;
    }
}