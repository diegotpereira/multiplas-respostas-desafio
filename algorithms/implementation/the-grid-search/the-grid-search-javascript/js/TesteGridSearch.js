import {gridSearch} from '../js/gridSearch.js';
import assert from 'assert';

describe('gridSearch', function() {

    it('O padrão foi encontrado: YES', function() {

        let G = [
            "7283455864",
            "6731158619",
            "8988242643",
            "3830589324",
            "2229505813",
            "5633845374",
            "6473530293",
            "7053106601",
            "0834282956",
            "4607924137"
        ];

        let P = [
            "9505",
            "3845",
            "3530"
        ];

        let esperado = 'YES';

        let resultado = gridSearch(G, P);

        assert.strictEqual(resultado, esperado);
    });
});

describe('gridSearch', function() {

    it('O padrão foi encontrado: NO', function() {

        let G = [
            "400453592126560",
            "114213133098692",
            "474386082879648",
            "522356951189169",
            "887109450487496",
            "252802633388782",
            "502771484966748",
            "075975207693780",
            "511799789562806",
            "404007454272504",
            "549043809916080",
            "962410809534811",
            "445893523733475",
            "768705303214174",
            "650629270887160"
        ];

        let P = [
            
            "99",
            "99"
        ]

        let esperado = 'NO';

        let resultado = gridSearch(G, P);

        assert.strictEqual(resultado, esperado);
    });
});

describe('gridSearch', function() {

    it('O padrão foi encontrado: NO', function() {

        let G = [
            "34889246430321978567",
            "58957542800420926643",
            "35502505614464308821",
            "14858224623252492823",
            "72509980920257761017",
            "22842014894387119401",
            "01112950562348692493",
            "16417403478999610594",
            "79426411112116726706",
            "65175742483779283052",
            "89078730337964397201",
            "13765228547239925167",
            "26113704444636815161",
            "25993216162800952044",
            "88796416233981756034",
            "14416627212117283516",
            "15248825304941012863",
            "88460496662793369385",
            "59727291023618867708",
            "19755940017808628326"
        ];

        let P = [
            
            "1641",
            "7942",
            "6517",
            "8907",
            "1376",
            "2691",
            "2599"
        ];

        let esperado = 'NO';

        let resultado = gridSearch(G, P);

        assert.strictEqual(resultado, esperado);
    });
});