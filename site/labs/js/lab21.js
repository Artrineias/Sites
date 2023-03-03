function Area(){
    altura = parseInt(document.getElementById("Altura").value)
    base = parseInt(document.getElementById("Base").value)
    saida = altura* base
    document.getElementById("saida").innerHTML = saida
    

}
function media(){
    nota1= parseInt(document.getElementById("nota1").value)
    nota2= parseInt(document.getElementById("nota2").value)
    saida = (nota1+nota2)/2
    document.getElementById("media").innerHTML = saida
}

function bhaskara(){
    a = parseInt(document.getElementById("a").value)
    b = parseInt(document.getElementById("b").value)
    c = parseInt(document.getElementById("c").value)
    delta = (b*b)-(4*a*c)
    if(delta<=0){
        posivel = false
        document.getElementById("possivel").innerHTML = "Não é possivel"
        document.getElementById("x1").innerHTML = "1°x: "+0
        document.getElementById("x2").innerHTML = "2°x: "+0
    } else {
        posivel = true
        x1 = (-b -(delta**(1/2)))/(2*a)
        x2 = (-b +(delta**(1/2)))/(2*a)
        document.getElementById("possivel").innerHTML = "Delta: "+ delta
        document.getElementById("x1").innerHTML = "1°x: "+x2
        document.getElementById("x2").innerHTML = "2°x: "+x1

    }

}
