import {squares} from '../js/squares.js';
import assert from 'assert';

describe('squares', function() {

    it('O limite superior do intervalo é: 2', function() {

        let a = 3;
        let b = 9;

        let esperado = 2;

        let resultado = squares(a, b);

        assert.strictEqual(resultado, esperado);
    });
});

describe('squares', function() {

    it('O limite superior do intervalo é: 0', function() {

        let a = 17;
        let b = 24;

        let esperado = 0;

        let resultado = squares(a, b);

        assert.strictEqual(resultado, esperado);
    });
});

describe('squares', function() {

    it('O limite superior do intervalo é: 24', function() {

        let a = 11;
        let b = 734;

        let esperado = 24;

        let resultado = squares(a, b);

        assert.strictEqual(resultado, esperado);
    });
});

describe('squares', function() {

    it('O limite superior do intervalo é: 15', function() {

        let a = 228;
        let b = 919;

        let esperado = 15;

        let resultado = squares(a, b);

        assert.strictEqual(resultado, esperado);
    });
});