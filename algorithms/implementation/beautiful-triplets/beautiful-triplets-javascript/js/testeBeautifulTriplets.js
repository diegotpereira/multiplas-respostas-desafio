import {beautifulTriplets} from '../js/beautifulTriplets.js';
import assert from 'assert';

describe('beautifulTriplets', function () {
   
    it('O número de lindos trigêmeos é: 3', function () {
        
        let d = 3;
        let arr = [1, 2, 4, 5, 7, 8, 10];

        let esperado = 3;

        let resultado = beautifulTriplets(d, arr);

        assert.strictEqual(resultado, esperado);
    });
});

describe('beautifulTriplets', function () {
   
    it('O número de lindos trigêmeos é: 2', function () {
        
        let d = 3;
        let arr = [1, 6, 7, 7, 8, 10, 12, 13, 14, 19];

        let esperado = 2;

        let resultado = beautifulTriplets(d, arr);

        assert.strictEqual(resultado, esperado);
    });
});