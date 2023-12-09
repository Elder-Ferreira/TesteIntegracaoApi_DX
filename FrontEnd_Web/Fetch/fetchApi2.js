//GetAll Restaurantes

fetch("https://localhost:7128/api/Restaurantes")
            .then(response => response.json())
            .then(data => {
                console.log(data);                
            })


const url = "https://localhost:7128/api/Restaurantes";

async function getProdutos() {
  let data = await fetch(url);

  
  let produto = await data.json();

 
}
alert("teste");
getProdutos();