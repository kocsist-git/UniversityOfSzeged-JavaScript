function transzponal(matrix) {
    const eredmeny = [];                // Ebben a változóban fogjuk tárolni a transzponálás után kapott mátrixot

    for (let j = 0; j < matrix[0].length; j++) {    // Most a paraméterben kapott mátrix oszlopait járjuk be először
        const sor = [];                 // Minden oszlopból készítünk egy sort, amit hozzáveszünk majd a transzponálthoz

        for (let i = 0; i < matrix.length; i++)     // Ezt követően bejárjuk az adott oszlop sorait
            sor.push(matrix[i][j]);     // Az oszlopon belüli elemeket hozzáfűzzük az eredmény mátrix egy sorához

        eredmeny.push(sor);             // Az így kapott sort hozzáfűzzük az eredmény mátrixhoz
    }

    return eredmeny;
}

console.log(transzponal([[1, 2, 3], [4, 5, 6]]));