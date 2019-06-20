fetch('http://localhost:3000/cidades')
.then(function(dados){
    return dados.json();
})
.then(function(resultado) { 
    for(cidade of resultado) {
        let novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = cidade.cidade;

        document.querySelector('#cidade').append(novoParagrafo);


    }

})