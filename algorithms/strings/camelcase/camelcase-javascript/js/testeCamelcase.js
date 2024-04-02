

import {camelcase} from '../js/camelcase.js';
import assert from 'assert';

describe('camelcase', function() {

    it('O número total de palavras encontradas na string é: 3', function() {

        let s = 'fraseComTres';
        let esperado = 3;
        
        let resultado = camelcase(s);
        
        assert.strictEqual(resultado, esperado);


    });
});

describe('camelcase', function() {

    it('O número total de palavras encontradas na string é: 4', function() {

        let s = 'fraseComQuatroPalavras';
        let esperado = 4;
        
        let resultado = camelcase(s);
        
        assert.strictEqual(resultado, esperado);


    });
});

describe('camelcase', function() {

    it('O número total de palavras encontradas na string é: 1', function() {

        let s = 'palavra';
        let esperado = 1;
        
        let resultado = camelcase(s);
        
        assert.strictEqual(resultado, esperado);


    });
});

describe('camelcase', function() {

    it('O número total de palavras encontradas na string é: 2', function() {

        let s = 'duasPalavras';
        let esperado = 2;
        
        let resultado = camelcase(s);
        
        assert.strictEqual(resultado, esperado);


    });
});