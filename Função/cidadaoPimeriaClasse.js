//Função em JS é First-Class Object (Citizen)
//Higher-order function

function fun1(params) {
    
}

//É possiver armazenar uma função edentro de uma variável
const fun2 = function() {}

//Armazenar em um array
const array = [function (a, b) {
    return a + b
}, fun1, fun2]
console.log(array[0](2, 3));

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar());

//Passar função com parametro para outra função
function run(fun) {
    fun()
}
run(function(){console.log('Executando...');})

//Uma função pode retornar/conter uma outra função
function soma(a, b) {
    return function(c){
        console.log(a + b + c);
    }
}

soma(2, 3)(4)
