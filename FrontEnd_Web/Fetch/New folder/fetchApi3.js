// GetAll Restaurantes

async function buscarDados() {
  try {
    const response = await fetch("https://localhost:7128/api/Produtos");
    const dados = await response.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

buscarDados();

//Post

/* const newRest = {
  Nome: "",
  Email: "",
  Telefone: "",
  Endereço: "",
  Categoria: "",
};

async function enviarDados() {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ newRest }),
  };

  try {
    const response = await fetch(
      "https://localhost:7128/api/Restaurantes",
      options
    );
    const resultado = await response.json();
    console.log(resultado);
  } catch (erro) {
    console.error("Erro ao enviar dados:", erro);
  }
}

enviarDados();  */
