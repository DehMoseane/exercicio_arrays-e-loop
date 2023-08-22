// Declare o array de números
const numeros = [8, 11, 4, 1];

let minimo = numeros[0];
let maximo = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < minimo) {
        minimo = numeros[i];
    }
    if (numeros[i] > maximo) {
        maximo = numeros[i];
    }
}

const maiorDiferenca = maximo - minimo;
console.log(maiorDiferenca);
