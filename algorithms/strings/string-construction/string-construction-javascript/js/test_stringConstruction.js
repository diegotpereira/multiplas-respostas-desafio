import {stringConstruction} from '../js/stringConstruction.js';
import assert from 'assert';

describe('stringConstruction', function() {

    it('custo mínimo de construção de uma nova string é 4', function() {

        let s = 'abcd';
        let esperado = 4;

        let resultado = stringConstruction(s);

        assert.strictEqual(resultado, esperado);

    });
});

describe('stringConstruction', function() {

    it('custo mínimo de construção de uma nova string é 2', function() {

        let s = 'abab';
        let esperado = 2;

        let resultado = stringConstruction(s);

        assert.strictEqual(resultado, esperado);

    });
});