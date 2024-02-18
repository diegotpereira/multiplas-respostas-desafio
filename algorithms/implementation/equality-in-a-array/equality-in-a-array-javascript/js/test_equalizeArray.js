import {equalizeArray} from './equalizeArray.js';

import assert from 'assert';

describe('equalizeArray', function() {

    it('O número mínimo de exclusões necessárias é: 2', function() {

        let arr = [3, 3, 2, 1, 3];

        let esperado = 2;

        let resultado = equalizeArray(arr)

        assert.strictEqual(resultado, esperado);
    });
});

describe('equalizeArray', function() {

    it('O número mínimo de exclusões necessárias é: 4', function() {

        let arr = [1, 2, 3, 1, 2, 3, 3, 3];

        let esperado = 4;

        let resultado = equalizeArray(arr)

        assert.strictEqual(resultado, esperado);
    });
});