
import {utopianTree} from '../js/utopianTree.js';
import assert from 'assert';

describe('utopianTree', function() {

    it('A altura da árvore após um determinado número de ciclos é 1', function() {

        let n = 0;
        let esperado = 1;

        let resultado = utopianTree(n)

        assert.strictEqual(resultado, esperado)
    });
});

describe('utopianTree', function() {

    it('A altura da árvore após um determinado número de ciclos é 2', function() {

        let n = 1;
        let esperado = 2;

        let resultado = utopianTree(n)

        assert.strictEqual(resultado, esperado)
    });
});

describe('utopianTree', function() {

    it('A altura da árvore após um determinado número de ciclos é 7', function() {

        let n = 4;
        let esperado = 7;

        let resultado = utopianTree(n)

        assert.strictEqual(resultado, esperado)
    });
});