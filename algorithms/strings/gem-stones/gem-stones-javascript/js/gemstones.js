

export function gemstones(arr) {
    
    let freq = {};
    let gemas = 0;

    arr.forEach(rocha => {

        for (let index = 0; index < rocha.length; index++) {
            
            let m = rocha[index];

            if (index === rocha.indexOf(m)) {
                
                freq[m] = (freq[m] || 0) + 1;

                if (freq[m] === arr.length) {
                    
                    gemas++;
                }
            }
            
        }
    });

    return gemas;
}