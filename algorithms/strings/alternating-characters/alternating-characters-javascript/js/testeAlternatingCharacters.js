import {alternatingCharacters} from '../js/alternatingCharacters.js';
import assert from 'assert';

describe('alternatingCharacters', function() {

    it('O número mínimo de exclusões necessárias é: 3', function() {

        let s = 'AAAA';
        let esperado = 3;

        let resultado = alternatingCharacters(s);

        assert.strictEqual(resultado, esperado);

    });
});

describe('alternatingCharacters', function() {

    it('O número mínimo de exclusões necessárias é: 0', function() {

        let s = 'ABABABAB';
        let esperado = 0;

        let resultado = alternatingCharacters(s);

        assert.strictEqual(resultado, esperado);

    });
});

describe('alternatingCharacters', function() {

    it('O número mínimo de exclusões necessárias é: 4', function() {

        let s = 'AAABBB';
        let esperado = 4;

        let resultado = alternatingCharacters(s);

        assert.strictEqual(resultado, esperado);

    });
});