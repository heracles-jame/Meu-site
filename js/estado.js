fetch('http://localhost:3000/estados')
.then(function(dados){
    return dados.json();
})
.then(function(resultado) { 
    for(estado of resultado) {
        let novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = estado.estado;

        document.querySelector('#estado').append(novoParagrafo);


    }

})