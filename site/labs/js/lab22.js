function par(){
    numero = document.getElementById("entrada")
    resposta = document.getElementById("resposta")
    comparador = numero.value
    if(comparador%2==0){
        resposta.value = "par"
    }
    else{
        resposta.value = "impar"
    }
    numero = document.getElementById("entrada").value = ""
}

function maior(){
    x = parseInt(document.getElementById("entrax").value)
    y = parseInt(document.getElementById("entray").value)
    z = parseInt(document.getElementById("entraz").value)
    saida = document.getElementById("saida")
    if(x>y&&x>z){
        saida.value = "X é o maior valor"
    }
    else if(y>z){
        saida.value = "Y é o maior valor"
    }
    else{
        saida.value = "Z é o maior valor"
    }
    document.getElementById("entraz").value = ""
    document.getElementById("entrax").value = ""
    document.getElementById("entray").value = ""
}

function soma(){
    numero = document.getElementById("numero").value
    somatotal = document.getElementById("somatotal")
    resposta = 0
    for(num=0;num<numero;num++){
        resposta= num+ resposta
        
    }
    somatotal.value = resposta
    document.getElementById("numero").value = ""
}
function fatorial(){
    numero = document.getElementById("numero-fatorial").value
    saida = document.getElementById("fator")
    resposta= 1
    count = 1
    while(numero!=0){
        resposta = count * resposta
        console.log(resposta)
        count++
        numero--
    }
    saida.value = resposta
    document.getElementById("numero-fatorial").value =""
}