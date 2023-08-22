
const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

// Percorra as posições respectivas dos arrays e imprima o menor valor
for (let i = 0; i < arrayA.length; i++) {
    console.log(Math.min(arrayA[i], arrayB[i]));
}
