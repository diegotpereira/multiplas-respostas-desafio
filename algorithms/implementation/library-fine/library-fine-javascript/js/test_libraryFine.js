import {libraryFine} from '../js/libraryFine.js';
import assert from 'assert';

describe('libraryFine', function() {

    it('O valor da multa é: 45', function() {

        let d1 = 9
        let m1 = 6
        let a1 = 2015
        
        let d2 = 6
        let m2 = 6
        let a2 = 2015
        
        let esperado = 45
        
        let resultado =  libraryFine(d1, m1, a1, d2, m2, a2)

        assert.strictEqual(resultado, esperado);
    });
});

describe('libraryFine', function() {

    it('O valor da multa é: 0', function() {

        let d1 = 6;
        let m1 = 6;
        let a1 = 2015;
        
        let d2 = 9;
        let m2 = 6;
        let a2 = 2016;
        
        let esperado = 0
        
        let resultado =  libraryFine(d1, m1, a1, d2, m2, a2)

        assert.strictEqual(resultado, esperado);
    });
});

describe('libraryFine', function() {

    it('O valor da multa é: 10000', function() {

        let d1 = 2;
        let m1 = 7;
        let a1 = 2015;
        
        let d2 = 1;
        let m2 = 2;
        let a2 = 2014;
        
        let esperado = 10000;
        
        let resultado =  libraryFine(d1, m1, a1, d2, m2, a2)

        assert.strictEqual(resultado, esperado);
    });
});