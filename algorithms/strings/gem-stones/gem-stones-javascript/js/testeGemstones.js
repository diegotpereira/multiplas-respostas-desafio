

import {gemstones} from '../js/gemstones.js';
import assert from 'assert';

describe('gemstones', function() {

    it('O número de diferentes tipos de elementos-gema que ele tem é: 2', function(){

        let arr = ['abcdde', 'baccd', 'eeabg'];
        
        let esperado = 2;
        
        let resultado = gemstones(arr);

        assert.strictEqual(resultado, esperado);

    });
});

describe('gemstones', function() {

    it('O número de diferentes tipos de elementos-gema que ele tem é: 4', function(){

        let arr = ['basdfj', 'asdlkjfdjsa', 'bnafvfnsd', 'oafhdlasd'];
        
        let esperado = 4;
        
        
        let resultado = gemstones(arr);

        assert.strictEqual(resultado, esperado);

    });
});


describe('gemstones', function() {

    it('O número de diferentes tipos de elementos-gema que ele tem é: 0', function(){

        let arr = ['vtrjvgbj', 'mkmjyaeav', 'sibzdmsk'];
        
        let esperado = 0;
        
        let resultado = gemstones(arr);

        assert.strictEqual(resultado, esperado);

    });
});