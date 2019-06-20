
// http://localhost:3000/cidades?estadoId=SP
// http://localhost:3000/cidades?cidade=Assis+Brasil

/*
var btnAlert = document.querySelector("#campoPesquisa");
btnAlert.addEventListener('click', (evt) => {
    console.log(evt);
    evt.preventDefault();

    alert("Digite a sigla do estado desejado com letra maiúscula ex:'TO'");
});
*/

document.querySelector("form").addEventListener("submit", function(evt) {
    evt.preventDefault();
});

var campoPesquisa = document.querySelector('#campoPesquisa');
campoPesquisa.addEventListener('change', function() {
    
    document.querySelector('#city').innerHTML = '';

    fetch('http://localhost:3000/cidades?estadoId=' + campoPesquisa.value)
    .then(function(dados){
        return dados.json();
    })
    .then(function(resultado) { 
        for(cidade of resultado) {
            let novoParagrafo = document.createElement('p');
            novoParagrafo.textContent = cidade.cidade;
    
            document.querySelector('#city').append(novoParagrafo);


    
        }
    
    })
})
