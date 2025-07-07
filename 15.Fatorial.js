//5. Calcular o fatorial de um número
//Crie uma função que receba um número e retorne seu fatorial.


function fatorial (n){
    let total = 1;
    for (i = n; i >= 1; i--) {
        total *= i;
    }

    return total
}

console.log(fatorial(4))


