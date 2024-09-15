/*  Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence. */

const empresa = {
    setores: [
      {
        nome: "Marketing",
        funcionarios: [
          { nome: " Virginia", cargo: "Gestor de Marketing" },
          { nome: "Rosa", cargo: " Social midia" },
        ],
      },
      {
        nome: "Administração geral",
        funcionarios: [
          { nome: "Paula", cargo: " Contadora" },
          { nome: "Roberto", cargo: " Administrador" },
        ],
      },
      {
        nome: "Juridico",
        funcionarios: [
          { nome: "Benjamin", cargo: " Advogado civil" },
          { nome: " Bianca", cargo: "Advogado de família" },
        ],
      },
    ],
  };
  
  for (const i in empresa.setores) {
    const setor = empresa.setores[i];
    console.log(`Departamento: ${setor.nome}`);
  
    for (const funcionario of setor.funcionarios) {
      console.log(
        `  Funcionário: ${funcionario.nome} - Cargo: ${funcionario.cargo}`
      );
    }
  }