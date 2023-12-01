import {pageCount} from '../js/pageCount.js';
import assert from 'assert';

describe('pageCount', function() {

    it('O número mínimo de páginas para virar é 0', function() {

        let n = 5;
        let p = 4;

        let esperado = 0;

        let resultado = pageCount(n, p);

        assert.strictEqual(resultado, esperado)
    });
});

describe('pageCount', function() {

    it('O número mínimo de páginas para virar é 1', function() {

        let n = 6;
        let p = 2;

        let esperado = 1;

        let resultado = pageCount(n, p);

        assert.strictEqual(resultado, esperado)
    });
});