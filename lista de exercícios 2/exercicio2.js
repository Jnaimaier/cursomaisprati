
// Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
	titulo: "Tipping point,o ponto da virada",
	autor: "Malcolm Gladwell",
	DataPublicacao: "Marco de 2000",
	genero: "Auto ajuda",
};

for (const props in livro) {
	if (props !== "editora") {
		livro.editora = "Little Brown";
	}
}

console.log(livro);