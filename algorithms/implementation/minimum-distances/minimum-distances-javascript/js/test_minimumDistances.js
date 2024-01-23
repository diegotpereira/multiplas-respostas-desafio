import {minimumDistances} from '../js/minimumDistances.js';
import assert from 'assert';

describe('minimumDistances', function() {

    it('A distância mínima encontrada ou se não houver elementos correspondentes é: 3', function() {

        let a = [7, 1, 3, 4, 1, 7]
        
        let esperado = 3;
        
        let resultado = minimumDistances(a);

        assert.strictEqual(resultado, esperado);
    });
});

describe('minimumDistances', function() {

    it('A distância mínima encontrada ou se não houver elementos correspondentes é: -1', function() {

        let a = [1, 2, 3, 4, 10]
        
        let esperado = -1;
        
        let resultado = minimumDistances(a);

        assert.strictEqual(resultado, esperado);
    });
});