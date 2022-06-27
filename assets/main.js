//Meio de acionamento da pesquisa do cep...
const corpoPesquisa = document.getElementById('pesquisa').addEventListener('click',

function () {
  
  let cep = document.getElementById('cep').value;
  
  //API de busca de cep...
  const url = `https://viacep.com.br/ws/${cep}/json/`
  
  fetch(url)
  .then(response => response.json())
  .then(json => {
    
    
    //Dados do endereço, que serão coletados na pesquisa do cep...
    let logradouro = document.getElementById('logradouro').innerHTML = "Logradouro: " + json.logradouro;
    let complemento = document.getElementById('complemento').innerHTML = "Complemento: " + json.complemento;
    let bairro = document.getElementById('bairro').innerHTML = "Bairro: " + json.bairro;
    let localidade = document.getElementById('localidade').innerHTML = "Localidade: " + json.localidade;
    let uf = document.getElementById('uf').innerHTML + "Uf: " + json.uf;
    let ddd = document.getElementById('ddd').innerHTML = "DDD: " + json.ddd;
    let cep_user = document.getElementById('cep-user').innerHTML = cep;
    
    estilos()
  })
  .catch(err => {
    console.log("Hello")
  })
})

//Estilização ao acionamento da pesquisa...
function estilos() {
  let estilo = document.getElementById('dos').setAttribute("class", "container-fi-dos-estilo")
  
  
}
