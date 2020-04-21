function calcular() {
    event.preventDefault()
    var resultado = 1
    var count = 1
    var numero = document.getElementById('numero').value

    for(count=1; count <= numero; count++) {
        resultado *= count;
    }

    document.getElementById('resposta').innerHTML = resultado 
}