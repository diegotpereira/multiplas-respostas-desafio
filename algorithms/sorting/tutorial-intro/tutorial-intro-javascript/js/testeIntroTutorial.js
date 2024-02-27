

import {introTutorial} from '../js/introTutorial.js';
import assert from 'assert';

describe('introTutorial', function() {

    it('O indice de V em arr é: 2', function() {

        let V = 3;
        let arr = [1, 2, 3];
        
        let esperado = 2;
        
        let resultado = introTutorial(V, arr);

        assert.strictEqual(esperado, resultado);
    });
});

describe('introTutorial', function() {

    it('O indice de V em arr é: 1', function() {

        let V = 4;
        let arr = [1, 4, 5, 7, 9, 12];
        
        let esperado = 1;
        
        let resultado = introTutorial(V, arr);

        assert.strictEqual(esperado, resultado);
    });
});


describe('introTutorial', function() {

    it('O indice de V em arr é: 11', function() {

        let V = 23;
        let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
        
        let esperado = 11;
        
        let resultado = introTutorial(V, arr);

        assert.strictEqual(esperado, resultado);
    });
});