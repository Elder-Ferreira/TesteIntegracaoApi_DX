const url = "https://localhost:7128/api/Pedidos/";

async function getPedidos() {
  let data = await fetch(url);
  let pedido = await data.json();

  alert(pedido[0]);
}
alert("teste");
getPedidos();
