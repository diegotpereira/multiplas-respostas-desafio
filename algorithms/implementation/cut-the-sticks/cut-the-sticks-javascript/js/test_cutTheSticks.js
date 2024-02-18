import {cutTheSticks} from '../js/cutTheSticks.js';
import assert from 'assert';

describe('cutTheSticks', function() {

    it('O número de bastões após cada iteração é 6, 4, 2, 1', function() {

        let arr = [5, 4, 4, 2, 2, 8];
        let esperado = '6, 4, 2, 1';

        let resultado = cutTheSticks(arr);

        assert.strictEqual(resultado.join(', '), esperado);
    });
});

describe('cutTheSticks', function() {

    it('O número de bastões após cada iteração é 8, 7, 6, 4, 3, 2, 1', function() {

        let arr = [1, 13, 3, 8, 14, 9, 4, 4];
        let esperado = '8, 7, 6, 4, 3, 2, 1';

        let resultado = cutTheSticks(arr);

        assert.strictEqual(resultado.join(', '), esperado);
    });
});

describe('cutTheSticks', function() {

    it('O número de bastões após cada iteração é 8, 7, 6, 4, 3, 2', function() {

        let arr = [8, 8, 14, 10, 3, 5, 14, 12];
        let esperado = '8, 7, 6, 4, 3, 2';

        let resultado = cutTheSticks(arr);

        assert.strictEqual(resultado.join(', '), esperado);
    });
});