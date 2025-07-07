//Verificar se um número é primo
//Crie uma função que receba um número e retorne se ele é primo ou não.
// Ele primeiro descarta o que ja nao e primo de certeza, ou seja, se o n for menor = 1, ja nao e numro primo
// Agora é feito um for, que pega o i = 2 e vai listar até o n = 9 por exemplo, feito isso
// é feito um if, que se o n for divisivel por algum numero até o 9 e o resto da divisao for 0, significa que ele não é so divisivel por ele mesmo ou por 1, logo ele não é primo

function Ehprimo(n){
  if(n <= 1){
    return false
  }

  for(i = 2; i < n; i++){
    if(n % i === 0){
      return false
    }
  }
  return true
}


console.log(Ehprimo(4));  // true
