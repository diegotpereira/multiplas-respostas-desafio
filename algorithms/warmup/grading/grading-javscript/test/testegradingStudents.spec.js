import { gradingStudents } from '../js/gradingStudents.js';

import assert from 'assert';

describe('gradingStudents', function() {

    it('deve arredondar uma nota abaixo de 38 para 38', function(){

        const grades = [37, 38];

        const esperado = [37, 40]

        const resultado = gradingStudents(grades);

        assert.deepStrictEqual(resultado, esperado)
    });
});


describe('gradingStudents', function() {

    it('deve arredondar várias notas', function(){

        const grades = [73, 67, 38, 33];

        const esperado = [75, 67, 40, 33]

        const resultado = gradingStudents(grades);

        assert.deepStrictEqual(resultado, esperado)
    });
});