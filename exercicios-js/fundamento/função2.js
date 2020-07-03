// Armazenando uma função em uma variável 
const imprirmirSoma = function(a, b){
    console.log(a + b);
}

imprirmirSoma(2, 3)

//Armazenar uma função Arrow( =>) em uma variável
const soma = (a, b ) => {
    return a + b 
}
console.log(soma(2, 3));

//Retorno implícito
const subtracao = (a, b) => a - b 
console.log(subtracao(2, 3));

const imprirmir2 = a => console.log(a);
imprirmir2('Legal')