// 🔹 6. Criar função que recebe um array de números e retorna a média
// Exemplo: [10, 5, 8] → média = 7.6
let numeros = [6, 36, 3];
let acumuladora = 0;

function mediaArray(array) {
  for (let i = 0; i < numeros.length; i++) {
    acumuladora += array[i];
  }
  acumuladora / array.length;
}
console.log(acumuladora);
