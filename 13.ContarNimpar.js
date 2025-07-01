//3. Somar todos os números ímpares entre 1 e 50
//Crie um programa que calcule a soma de todos os números ímpares entre 1 e 50.

let contador = 0;

for (i = 1; i <= 50; i++) {
  if (i % 2 === 1) {
    contador += i;
  }
}

console.log(contador);
