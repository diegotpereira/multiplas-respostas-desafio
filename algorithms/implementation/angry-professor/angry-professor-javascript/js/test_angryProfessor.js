import {angryProfessor} from '../js/angryProfessor.js';
import assert from 'assert';

describe('angryProfessor', function() {

    it('A aula será cancelada', function() {

        let k = 3;
        let a = [-1, -3, 4, 2];

        let esperado = "YES";

        let resultado = angryProfessor(k, a);

        assert.strictEqual(resultado, esperado);
        
    });
});

describe('angryProfessor', function() {

    it('A aula não será cancelada', function() {

        let k = 2;
        let a = [0, -1, 2, 1];

        let esperado = "NO";

        let resultado = angryProfessor(k, a);

        assert.strictEqual(resultado, esperado);
        
    });
});


describe('angryProfessor', function() {

    it('A aula não será cancelada', function() {

        let k = 4;
        let a = [0, -1, 2, -2, 1, -3];

        let esperado = "NO";

        let resultado = angryProfessor(k, a);

        assert.strictEqual(resultado, esperado);
        
    });
});