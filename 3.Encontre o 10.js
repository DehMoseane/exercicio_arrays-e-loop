// Declare o array de números
const numeros = [54, 22, 14, 10, 284];

// Use o método indexOf para verificar se o número 10 está presente no array
const posicao = numeros.indexOf(10);

// Verifique se o número foi encontrado ou não
if (posicao === -1) {
    console.log(-1);
} else {
    console.log(posicao);
}
