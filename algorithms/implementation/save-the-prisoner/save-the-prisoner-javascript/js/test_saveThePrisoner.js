import {saveThePrisoner} from '../js/saveThePrisoner.js';
import assert from 'assert';

describe('saveThePrisoner', function() {
    
    it('O número do prisioneiro que recebe o último doce é 2', function() {

        let n = 5;
        let m = 2;
        let s = 1;
        
        let esperado = 2;
        
        let resultado = saveThePrisoner(n, m, s);

        assert.strictEqual(resultado, esperado);
    });
});

describe('saveThePrisoner', function() {
    
    it('O número do prisioneiro que recebe o último doce é 3', function() {

        let n = 5;
        let m = 2;
        let s = 2;
        
        let esperado = 3;
        
        let resultado = saveThePrisoner(n, m, s);

        assert.strictEqual(resultado, esperado);
    });
});

describe('saveThePrisoner', function() {
    
    it('O número do prisioneiro que recebe o último doce é 6', function() {

        let n = 7;
        let m = 19;
        let s = 2;
        
        let esperado = 6;
        
        let resultado = saveThePrisoner(n, m, s);

        assert.strictEqual(resultado, esperado);
    });
});

describe('saveThePrisoner', function() {
    
    it('O número do prisioneiro que recebe o último doce é 3', function() {

        let n = 3;
        let m = 7;
        let s = 3;
        
        let esperado = 3;
        
        let resultado = saveThePrisoner(n, m, s);

        assert.strictEqual(resultado, esperado);
    });
});