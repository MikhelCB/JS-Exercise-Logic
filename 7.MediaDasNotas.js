// 7. Média de três notas
// Calcule a média de 3 notas e diga se o aluno foi aprovado (média >= 7).

//Minha solução +- errada
// let NotaX = 10;
// let NotaY = 5;
// let NotaZ = 3;

// function SomarNotas(NotaX, NotaY, NotaZ) {
//   return (NotaX + NotaY + NotaZ) / 3;
// }

// const resultado = SomarNotas(NotaX, NotaY, NotaZ); //essa parte que não estava sendo definida direito, o resto foi certo
// console.log(resultado);

// if (resultado >= 7) {
//   console.log("Foi Aprovado");
// } else {
//   console.log("Reprovou");
// }

let n1 = 7;
let n2 = 5;
let n3 = 10;

let media = (n1 + n2 + n3) / 3;

if (media >= 7) {
  console.log("Foi Aprovado");
} else {
  console.log("Foi Reprovado");
}
