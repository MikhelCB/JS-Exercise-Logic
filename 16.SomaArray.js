// 🔹 6. Criar função que recebe um array de números e retorna a média
// Exemplo: [10, 5, 8] → média = 7.6

// O lenght é uma propriedade no javascript que diz quantos elementos tem no array ########
//Eu crio uma função chamada mediaArray e passo como parâmetro o array com os numeros
// Eu crio uma variável acumuladora e crio um laço for, que é um contador, ele vai contar até o número de elementos que estiver dentro do array(numeros)
//Em cada volta do for, é somado o numero atual do array, acumuladora += array[i] || ex: i = 0 → array[0] = 6 → acumuladora = 6 || i = 1 → array[1] = 36 → acumuladora = 6 + 36 = 42

function mediaArray(array) {
  let acumuladora = 0;

  for (let i = 0; i < array.length; i++) {
    acumuladora += array[i];
  }
  return acumuladora / array.length;
}

let numeros = [6, 36, 3, 4];
let resultado = mediaArray(numeros);
console.log("Média:", resultado); // 15
