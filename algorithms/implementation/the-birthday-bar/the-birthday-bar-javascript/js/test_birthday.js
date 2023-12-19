import assert from 'assert';
import { birthday } from '../js/birthday.js';

describe('birthday', function() {

    it('o número de maneiras que a barra pode ser dividida é 0', function() {

        let s = [1, 1, 1, 1, 1, 1];
        let d = 3;
        let m = 2;

        let esperado = 0;

        let resultado = birthday(s, d, m);

        assert.strictEqual(resultado, esperado)
    });
});


describe('birthday', function() {

    it('o número de maneiras que a barra pode ser dividida é 2', function() {

        let s = [1, 2, 1, 3, 2];
        let d = 3;
        let m = 2;

        let esperado = 2;

        let resultado = birthday(s, d, m);

        assert.strictEqual(resultado, esperado)
    });
});

describe('birthday', function() {

    it('o número de maneiras que a barra pode ser dividida é 1', function() {

        let s = [4];
        let d = 4;
        let m = 1;

        let esperado = 1;

        let resultado = birthday(s, d, m);

        assert.strictEqual(resultado, esperado)
    });
});