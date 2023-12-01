import {pickingNumbers} from '../js/pickingNumbers.js';
import assert from 'assert';

describe('pickingNumbers', function() {

    it('O comprimento da submatriz mais longa que atende ao critério é 5', function() {

        let arr = [1, 2, 2, 3, 1, 2];

        let esperado = 5;

        let resultado = pickingNumbers(arr)

        assert.strictEqual(resultado, esperado)

    });
});

describe('pickingNumbers', function() {

    it('O comprimento da submatriz mais longa que atende ao critério é 2', function() {

        let arr = [98, 3, 99, 1, 97, 2];

        let esperado = 2;

        let resultado = pickingNumbers(arr);

        assert.strictEqual(resultado, esperado);

    });
});

describe('pickingNumbers', function() {

    it('O comprimento da submatriz mais longa que atende ao critério é 3', function() {

        let arr = [4, 6, 5, 3, 3, 1];

        let esperado = 3;

        let resultado = pickingNumbers(arr);

        assert.strictEqual(resultado, esperado);

    });
});