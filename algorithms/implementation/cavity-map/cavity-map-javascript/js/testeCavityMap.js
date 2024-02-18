import {cavityMap} from '../js/cavityMap.js';
import assert from 'assert';

describe('cavityMap', function(){

    it('A grade modificada é: 989, 1X1, 111', function() {

        let grade = ['989', '191', '111'];
        let esperado = ['989', '1X1', '111'];

        let resultado = cavityMap(grade);

        assert.deepStrictEqual(resultado, esperado);

    });
});

