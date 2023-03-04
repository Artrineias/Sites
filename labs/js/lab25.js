function tabuada(){
    entrada = document.getElementById("entrada").value
    saida = []
    for(i=0;i<11;i++){
        saida.push(document.getElementById("0"+i))
        saida[i].value = entrada + " x " + i + " = " + entrada*i
    }
}
lista = []
function adicionar(){
    lista.push(parseInt(document.getElementById("numero").value))

}

function ordem(){
    document.getElementById("saida").innerHTML = lista.sort()
}