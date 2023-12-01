import {catAndMouse} from '../js/catAndMouse.js';
import assert from 'assert';

describe('catAndMouse', function() {

    it('Deve retornar quando estiver mais próximo do rato: Cat B', function() {

        let x = '1';
        let y = '2';
        let z = '3';

        let esperado = 'Cat B';

        let resultado = catAndMouse(x, y, z)

        assert.strictEqual(resultado, esperado);
    });
});

describe('catAndMouse', function() {

    it('Deve retornar quando estiver mais próximo do rato: Mouse C Escape', function() {

        let x = '1';
        let y = '3';
        let z = '2';

        let esperado = 'Mouse C';

        let resultado = catAndMouse(x, y, z)

        assert.strictEqual(resultado, esperado);
    });
});

describe('catAndMouse', function() {

    it('Deve retornar quando estiver mais próximo do rato: Cat A', function() {

        let x = '33';
        let y = '86';
        let z = '59';

        let esperado = 'Cat A';

        let resultado = catAndMouse(x, y, z)

        assert.strictEqual(resultado, esperado);
    });
});