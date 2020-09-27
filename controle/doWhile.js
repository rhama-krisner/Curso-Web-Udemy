function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do { //Executa o bloco antes de tomar a decisão
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`);
} while (opcao != -1) 

console.log('Até a próxima.');