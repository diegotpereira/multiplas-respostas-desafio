import {maximumPerimeterTriangle} from '../js/maximumPerimeterTriangle.js';
import assert from 'assert';

describe('maximumPerimeterTriangle', function() {

    it('Os comprimentos dos lados do triângulo escolhido em ordem não decrescente é: [1, 3, 3]', function() {

        let sticks = [1, 1, 1, 3, 3];
        let esperado = [1, 3, 3];

        let resultado = maximumPerimeterTriangle(sticks);

        assert.deepStrictEqual(resultado, esperado);

    });
});

describe('maximumPerimeterTriangle', function() {

    it('Os comprimentos dos lados do triângulo escolhido em ordem não decrescente é: [-1]', function() {

        let sticks = [1, 2, 3];
        let esperado = [-1];

        let resultado = maximumPerimeterTriangle(sticks);

        assert.deepStrictEqual(resultado, esperado);

    });
});

describe('maximumPerimeterTriangle', function() {

    it('Os comprimentos dos lados do triângulo escolhido em ordem não decrescente é: [1, 1, 1]', function() {

        let sticks = [1, 1, 1, 2, 3, 5];
        let esperado = [1, 1, 1];

        let resultado = maximumPerimeterTriangle(sticks);

        assert.deepStrictEqual(resultado, esperado);

    });
});