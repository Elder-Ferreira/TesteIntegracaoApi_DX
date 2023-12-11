// GETALL - Buscar lista de Restaurantes
async function buscarLista() {
  try {
    const response = await fetch('https://localhost:7128/api/Produtos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Falha ao buscar lista de restaurantes');
    }

    const data = await response.json();
    console.log('Lista encontrada', data);
  } catch (error) {
    console.error('Erro ao buscar lista de restaurantes', error.message);
  }
}

// POST - Criar novo produto
async function criarProduto(newData) {
  try {
    const response = await fetch('https://localhost:7128/api/Produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error('Falha ao criar novo pedido, tente novamente mais tarde');
    }

    const createdData = await response.json();
    console.log('Novo produto criado:', createdData);
  } catch (error) {
    console.error('Erro ao criar produto', error.message);
  }
}

// PUT - Atualizar produto
async function atualizarProduto(id, updatedData) {
  try {
    const response = await fetch(`https://localhost:7128/api/Produtos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error('Falha ao atualizar produto, tente novamente mais tarde');
    }

    const updatedItem = await response.json();
    console.log('Produto atualizado:', updatedItem);
  } catch (error) {
    console.error('Erro ao atualizar produto', error.message);
  }
}

// DELETE - Excluir produto
async function excluirPedido(id) {
  try {
    const response = await fetch(`https://localhost:7128/api/Produtos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Falha ao excluir produto');
    }

    console.log('Produto excluído com sucesso.');
  } catch (error) {
    console.error('Erro ao excluir produto', error.message);
  }
}
