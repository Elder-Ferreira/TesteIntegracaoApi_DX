// GETALL - Buscar lista de pedidos
async function buscarLista() {
  try {
    const response = await fetch('https://localhost:7128/api/Pedidos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Falha ao buscar lista de pedidos');
    }

    const data = await response.json();
    console.log('Lista encontrada', data);
  } catch (error) {
    console.error('Erro ao buscar lista de pedidos', error.message);
  }
}

// POST - Criar pedido
async function criarPedido(newData) {
  try {
    const response = await fetch('https://localhost:7128/api/Pedidos', {
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
    console.log('Novo pedido criado:', createdData);
  } catch (error) {
    console.error('Erro ao criar pedido', error.message);
  }
}

// PUT - Atualizar pedido
async function atualizarPedido(id, updatedData) {
  try {
    const response = await fetch(`https://localhost:7128/api/Pedidos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error('Falha ao atualizar pedido, tente novamente mais tarde');
    }

    const updatedItem = await response.json();
    console.log('Pedido atualizado:', updatedItem);
  } catch (error) {
    console.error('Erro ao atualizar pedido', error.message);
  }
}

// DELETE - Excluir pedido
async function excluirPedido(id) {
  try {
    const response = await fetch(`https://localhost:7128/api/Pedidos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Falha ao excluir pedido');
    }

    console.log('Pedido excluído com sucesso.');
  } catch (error) {
    console.error('Erro ao excluir pedido', error.message);
  }
}
