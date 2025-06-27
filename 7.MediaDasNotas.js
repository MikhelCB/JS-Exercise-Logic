// 7. Média de três notas
// Calcule a média de 3 notas e diga se o aluno foi aprovado (média >= 7).
let n1 = 6;
let n2 = 3;
let n3 = 10;

let Media = (n1 + n2 + n3) / 3;

if (Media >= 7) {
  console.log(` O aluno foi aprovado com média : ${Media.toFixed(2)} `);
} else {
  console.log(` O aluno foi Reprovado com média : ${Media.toFixed(2)} `);
}
