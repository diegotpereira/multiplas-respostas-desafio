
import {funnyString} from '../js/funnyString.js';
import assert from 'assert';

describe('funnyString', function() {

    it('A string é : Funny', function() {

        let s = 'acxz';
        let esperado = 'Funny';

        let resultado = funnyString(s)

        assert.strictEqual(resultado, esperado);
    });
});

describe('funnyString', function() {

    it('A string é : Not Funny', function() {

        let s = 'bcxz';
        let esperado = 'Not Funny';

        let resultado = funnyString(s)

        assert.strictEqual(resultado, esperado);
    });
});

describe('funnyString', function() {

    it('A string é : Not Funny', function() {

        let s = 'ivvkxq';
        let esperado = 'Not Funny';

        let resultado = funnyString(s)

        assert.strictEqual(resultado, esperado);
    });
});