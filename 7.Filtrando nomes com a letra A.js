// Declare o array de números
const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

// Inicialize uma variável para armazenar a soma
let somaPares = 0;

// Percorra o array e verifique cada número
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        somaPares += numeros[i];
    }
}

// Imprima a soma dos números pares no console
console.log(somaPares);
