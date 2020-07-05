const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = b - d
const multiplicado = a * b
const divisao = d / a
const modulo = a % 2
console.log(`Soma: ${soma}, Subtração: ${subtracao}, Multiplicação: ${multiplicado}, Divisão: ${divisao}`);
if (modulo == 0) {
    console.log(`${modulo} é um valor par`);
} else{
    console.log(`${modulo} é um valor ímpar`);
}


