import { migratoryBirds } from "../js/migratoryBirds.js";
import assert from 'assert';

describe('migratoryBirds', function() {

    it('O menor ID de tipo das aves avistadas com mais frequência é 4', function() {

        let arr = [1, 4, 4, 4, 5, 3];
        let esperado = 4

        let resultado = migratoryBirds(arr)

        assert.strictEqual(resultado, esperado);
    });
});

describe('migratoryBirds', function() {

    it('O menor ID de tipo das aves avistadas com mais frequência é 3', function() {

        let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
        let esperado = 3;

        let resultado = migratoryBirds(arr)

        assert.strictEqual(resultado, esperado);
    });
});


describe('migratoryBirds', function() {

    it('O menor ID de tipo das aves avistadas com mais frequência é 3', function() {

        let arr = [2, 4, 3, 2, 3, 1, 2, 1, 3, 3];
        let esperado = 3;

        let resultado = migratoryBirds(arr)

        assert.strictEqual(resultado, esperado);
    });
});