/*
Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.
*/


const transacoes = [
	{ entrada: 110, saida: 200 },
	{ entrada: 406, saida: 50 },
	{ entrada: 207, saida: 190 },
	{ entrada: 815, saida: 10.43 },
	{ entrada: 1150, saida: 160 },
	{ entrada: 2000, saida: 80 },
	{ entrada: 470, saida: 60 },
	{ entrada: 500, saida: 120 },
];

saldoFinal = 0;

transacoes.forEach((transacao) => {
	saldoFinal += transacao.entrada - transacao.saida;
});

console.log(`O seu saldo final é R$${saldoFinal.toFixed(2).replace(".", ",")}`);