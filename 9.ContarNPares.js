// 9. Contar quantos números pares de 1 a 50
// Conte quantos números pares existem entre 1 e 50.
let pares = 0;

for (i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    pares++;
  }
}
console.log(pares);
