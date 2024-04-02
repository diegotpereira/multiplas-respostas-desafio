import {theLoveLetterMystery} from '../js/theLoveLetterMystery.js';
import assert from 'assert';

describe('theLoveLetterMystery', function() {

    it('O número de operações mínimas é: 2', function() {

        let s = 'abc';
        let esperado = 2;
        let resultado = theLoveLetterMystery(s);

        assert.deepStrictEqual(resultado, esperado);

    });
});

describe('theLoveLetterMystery', function() {

    it('O número de operações mínimas é: 0', function() {

        let s = 'abcba';
        let esperado = 0;
        let resultado = theLoveLetterMystery(s);

        assert.deepStrictEqual(resultado, esperado);

    });
});

describe('theLoveLetterMystery', function() {

    it('O número de operações mínimas é: 4', function() {

        let s = 'abcd';
        let esperado = 4;
        let resultado = theLoveLetterMystery(s);

        assert.deepStrictEqual(resultado, esperado);

    });
});