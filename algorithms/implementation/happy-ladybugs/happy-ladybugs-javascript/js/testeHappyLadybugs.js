import {happyLadybugs} from '../js/happyLadybugs.js';
import assert from 'assert';

describe('happyLadybugs', function () {
   
    it('Deve retornar YES para uma string feliz', function () {
        

        let b = 'RBY_YBR';

        let esperado = 'YES';

        let resultado = happyLadybugs(b)

        assert.strictEqual(resultado, esperado)
    });
});


describe('happyLadybugs', function () {
   
    it('Deve retornar NO para uma string feliz', function () {
        

        let b = 'X_Y__X';

        let esperado = 'NO';

        let resultado = happyLadybugs(b)

        assert.strictEqual(resultado, esperado)
    });
});

describe('happyLadybugs', function () {
   
    it('Deve retornar YES para uma string feliz', function () {
        

        let b = '__';

        let esperado = 'YES';

        let resultado = happyLadybugs(b)

        assert.strictEqual(resultado, esperado)
    });
});