// Declare o array de letras
const letras = ["A", "e", "B", "C", "E", "z"];

// Inicialize uma variável para contar as ocorrências de "E" ou "e"
let contador = 0;

// Percorra o array e verifique cada letra
for (let i = 0; i < letras.length; i++) {
    if (letras[i] === "E" || letras[i] === "e") {
        contador++;
    }
}

// Verifique se houve alguma ocorrência
if (contador === 0) {
    console.log("Nenhuma letra 'E' ou 'e' foi encontrada.");
} else {
    console.log(`Foram encontradas ${contador} letras 'E' ou 'e'.`);
}
