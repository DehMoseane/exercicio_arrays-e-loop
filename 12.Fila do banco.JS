
const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

// Defina o limite de pessoas na fila de dentro
const limiteFilaDentro = 5;

// Enquanto houver pessoas na fila de fora e espaços disponíveis na fila de dentro
while (filaDeFora.length > 0 && filaDeDentro.length < limiteFilaDentro) {
    // Retire o primeiro da fila de fora e coloque-o no final da fila de dentro
    filaDeDentro.push(filaDeFora.shift());
}


console.log(filaDeDentro);
console.log(filaDeFora);
