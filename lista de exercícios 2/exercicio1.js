/*Objetivo:Enunciado do exercício Crie um objeto carro com características(propriedades) como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
*/

const carro = {
    marca: "fiat",
    modelo: "fiorino",
    ano: 2014,
    cor: "branca"
}

for (let propriedade in carro){
    console.log(carro[propriedade]);
}