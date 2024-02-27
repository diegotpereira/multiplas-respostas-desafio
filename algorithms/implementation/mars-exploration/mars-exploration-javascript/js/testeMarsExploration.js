import {marsExploration} from '../js/marsExploration.js';
import assert from 'assert';

describe('marsExploration', function() {

    it('O número total de caracteres que foram alterados durante a transmissão é: 3', function () {
        
        let s = 'SOSSPSSQSSOR';
        let esperado = 3;

        let resultado = marsExploration(s);

        assert.strictEqual(resultado, esperado);
    });
});

describe('marsExploration', function() {

    it('O número total de caracteres que foram alterados durante a transmissão é: 3', function () {
        
        let s = 'SPSSQSSOR';
        let esperado = 3;

        let resultado = marsExploration(s);

        assert.strictEqual(resultado, esperado);
    });
});

describe('marsExploration', function() {

    it('O número total de caracteres que foram alterados durante a transmissão é: 1', function () {
        
        let s = 'SOSSOT';
        let esperado = 1;

        let resultado = marsExploration(s);

        assert.strictEqual(resultado, esperado);
    });
});

describe('marsExploration', function() {

    it('O número total de caracteres que foram alterados durante a transmissão é: 0', function () {
        
        let s = 'SOSSOSSOS';
        let esperado = 0;

        let resultado = marsExploration(s);

        assert.strictEqual(resultado, esperado);
    });
});

describe('marsExploration', function() {

    it('O número total de caracteres que foram alterados durante a transmissão é: 2', function () {
        
        let s = 'SOSSTSSMS';
        let esperado = 2;

        let resultado = marsExploration(s);

        assert.strictEqual(resultado, esperado);
    });
});

describe('marsExploration', function() {

    it('O número total de caracteres que foram alterados durante a transmissão é: 2', function () {
        
        let s = 'SASSOSSMS';
        let esperado = 2;

        let resultado = marsExploration(s);

        assert.strictEqual(resultado, esperado);
    });
});

describe('marsExploration', function() {

    it('O número total de caracteres que foram alterados durante a transmissão é: 2', function () {
        
        let s = 'SASSBSSOS';
        let esperado = 2;

        let resultado = marsExploration(s);

        assert.strictEqual(resultado, esperado);
    });
});