import {stones} from '../js/stones.js';
import assert from 'assert';

describe('stones', function() {

    it('Os valores possíveis da última pedra, classificados em ordem crescente é: 2, 3, 4', function() {

        let n = 3;
        let a = 1;
        let b = 2;
        
        let esperado = [2, 3, 4];
        
        let resultado = stones(n, a, b);

        assert.deepStrictEqual(resultado, esperado);
    })
});

describe('stones', function() {

    it('Os valores possíveis da última pedra, classificados em ordem crescente é: 30, 120, 210, 300', function() {

        let n = 4;
        let a = 10;
        let b = 100;
        
        let esperado = [30, 120, 210, 300];
        
        let resultado = stones(n, a, b);

        assert.deepStrictEqual(resultado, esperado);
    })
});

describe('stones', function() {

    it('Os valores possíveis da última pedra, classificados em ordem crescente é: 54, 56, 58, 60, 62, 64, 66', function() {

        let n = 7;
        let a = 9;
        let b = 11;
        
        let esperado = [54, 56, 58, 60, 62, 64, 66];
        
        let resultado = stones(n, a, b);

        assert.deepStrictEqual(resultado, esperado);
    })
});

describe('stones', function() {

    it('Os valores possíveis da última pedra, classificados em ordem crescente é: 24, 32, 40, 48', function() {

        let n = 4;
        let a = 8;
        let b = 16;
        
        let esperado = [24, 32, 40, 48];
        
        let resultado = stones(n, a, b);

        assert.deepStrictEqual(resultado, esperado);
    })
});