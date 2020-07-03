// Função sem retoro
function imprirmirSoma(a, b){
    console.log(a + b);    

}
imprirmirSoma(2, 3)
imprirmirSoma(2)
imprirmirSoma(2, 10, 4, 5, 6, 7, 8)
imprirmirSoma()

//Função com retonno

function soma(a, b = 1){
    return a + b
}
console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());