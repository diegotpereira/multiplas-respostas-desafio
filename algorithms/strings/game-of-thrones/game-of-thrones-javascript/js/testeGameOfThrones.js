

import {gameOfThrones} from '../js/gameOfThrones.js';
import assert from 'assert';

describe('gameOfThrones', function() {

    it('A reorganização das letras da string pode formar um palíndromo? YES', function() {

        let s = 'aaabbbb';
        let esperado = 'YES';
        let resultado = gameOfThrones(s);

        assert.deepStrictEqual(resultado, esperado);
        
    });
});

describe('gameOfThrones', function() {

    it('A reorganização das letras da string pode formar um palíndromo? NO', function() {

        let s = "cdefghmnopqrstuvw";
        let esperado = "NO";
        let resultado = gameOfThrones(s);

        assert.strictEqual(resultado, esperado);
        
    });
});

