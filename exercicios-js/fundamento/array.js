const valores = [7.7, 8.9, 6.3, 9.2]


console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10

console.log(valores);
console.log('Array com ',valores.length,' elementos');
valores.push({id: 3}, false, null, 'teste') //[push] Coloca intens na array
console.log(valores);
console.log(valores.pop()); // [pop()] Exclui o ultomo elemento de um array e o retorna
delete valores[0] // Deleta um elemento do array
console.log(valores);
console.log(typeof valores);
