// 7. Função que recebe uma palavra e retorna quantas vogais ela tem
// Dica: use .includes() e percorra letra por letra com for.

let palavra = "Mikhel";
let vogais = "aeiou";
let contador = 0;

for (let i = 0; i < palavra.length; i++) {
  let letra = palavra[i].toLowerCase();

  console.log(palavra[i]);

  if (vogais.includes(letra)) {
    contador++;
  }
}

console.log("Quantidade de vogais:", contador);
