import {designerPdfViewer} from '../js/designerPdfViewer.js';
import assert from 'assert';

describe('designerPdfViewer', function() {

    it('O tamanho da área destacada é 28', function() {

        let k = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
        let palavra = ['z','a', 'b', 'a'];
        let esperado = 28;

        let resultado = designerPdfViewer(k, palavra)

        assert.strictEqual(resultado, esperado)
    });
});

describe('designerPdfViewer', function() {

    it('O tamanho da área destacada é 9', function() {

        let k = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
        let palavra = ['a', 'b', 'c'];
        let esperado = 9;

        let resultado = designerPdfViewer(k, palavra)

        assert.strictEqual(resultado, esperado)
    });
});

describe('designerPdfViewer', function() {

    it('O tamanho da área destacada é 70', function() {

        let k = [6, 5, 7, 3, 6, 7, 3, 4, 4, 2, 3, 7, 1, 3, 7, 4, 6, 1, 2, 4, 3, 3, 1, 1, 3, 5];
        let palavra = ['z', 'b', 'k', 'k', 'f', 'h', 'w', 'p', 'l', 'j'];
        let esperado = 70;

        let resultado = designerPdfViewer(k, palavra)

        assert.strictEqual(resultado, esperado)
    });
});