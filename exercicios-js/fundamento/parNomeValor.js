const saudacao = 'Opa' // Contexto léxico 1
function exec(){
    const saudacao = 'Falaaa' // Contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor 

const cliente = {
    nome: 'Rhama Krisner',
    idade: 26,
    peso: 84,
    endereço:{
        logadouro: 'Rua Jacarandá',
        numero: 824,

    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);