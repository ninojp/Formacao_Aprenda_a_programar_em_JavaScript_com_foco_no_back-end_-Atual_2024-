'use strict';
import listEstudantes from './estudantes.json' with{type: 'json'};

function ordenar(listObj, nomeProp){
    return listObj.sort((a, b) => {
        let nomeA = a[nomeProp].toLowerCase();//MDN exemplo: Para NÃO DIFERENCIAR entre letras maiúsculas e minúsculas
        let nomeB = b[nomeProp].toLowerCase();
        if(nomeA < nomeB) return -1;
        if(nomeA > nomeB) return 1;
        return 0;
    });
};
console.log(ordenar(listEstudantes, 'nome'));



//exemplos do MDN
// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);
// months.sort((a, b) => a - b);
// console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
