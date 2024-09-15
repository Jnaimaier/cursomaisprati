// Filtrando Arrays de Objetos
// Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

const funcionarios = [
	{ nome: "Glauber", cargo: "Motorista de aplicativo - uber", salario: 3600 },
	{ nome: "Patricia", cargo: "Professora de matematica", salario: 4500 },
	{ nome: "Cintia", cargo: "Pizzaiolo", salario: 5000 },
    { nome: "Erick", cargo: "estagiario", salario: 1500 }
];

for (const funcionario of funcionarios) {
	if (funcionario.salario > 2000) {
		console.log(
			`${funcionario.nome} trabalha como ${funcionario.cargo} e recebe o salário de R$ ${funcionario.salario},00.`,
		);
	}
}