let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //Return está implícito
console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //O _ é um parâmetro aqui
console.log(ola());
