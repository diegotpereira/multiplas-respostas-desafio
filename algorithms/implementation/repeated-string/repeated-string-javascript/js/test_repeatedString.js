import {repeatedString} from '../js/repeatedString.js';
import assert from 'assert';

describe('repeatedString', function() {

    it('A frequência de "a" na substring é: 7', function() {

        let s = 'aba';
        
        let n =  10;
        
        let esperado = 7;
        
        let resultado = repeatedString(s, n);

        assert.strictEqual(resultado, esperado);
    });
});

describe('repeatedString', function() {

    it('A frequência de "a" na substring é: 1000000000000', function() {

        let s = 'a'
        
        let n =  1000000000000
        
        let esperado = 1000000000000
        
        let resultado = repeatedString(s, n);

        assert.strictEqual(resultado, esperado);
    });
});

describe('repeatedString', function() {

    it('A frequência de "a" na substring é: 588525', function() {

        let s = 'aab'
        
        let n =  882787
        
        let esperado = 588525
        
        let resultado = repeatedString(s, n);

        assert.strictEqual(resultado, esperado);
    });
});