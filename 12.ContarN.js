//Contar quantos números entre 1 e 100 são divisíveis por 5 e por 2
//Crie um programa que conte quantos números de 1 a 100 são divisíveis por 5 e por 2 ao mesmo tempo.
let contador = 0;

for (i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 2 === 0) {
    contador++;
  }
}
console.log(contador);
