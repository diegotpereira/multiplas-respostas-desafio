import { solveMeFirst } from '../js/app.js';
import assert from 'assert';

describe('solveMeFirst', function() {
    it(' A soma de a e b 10', function() {
        const resultado = solveMeFirst(5, 5); 
        const esperado = 10;
        assert.strictEqual(resultado, esperado);
    });
});

describe('solveMeFirst', function() {
    it(' A soma de a e b 51', function() {
        const resultado = solveMeFirst(10, 41); 
        const esperado = 51;
        assert.strictEqual(resultado, esperado);
    });
});