var lutador_1 = {
    nome:"",
    pontos:0
}
var lutador_2 = {
    nome:"",
    pontos:0
}
function adicionar(opção){
    if (opção=="0"){
        saida = document.getElementById("placar_1")
        lutador_1.pontos++ 
        saida.value = lutador_1.pontos
        console.log(lutador_1.pontos)

    }
    if (opção=="1"){
        saida = document.getElementById("placar_2")
        lutador_2.pontos++
        saida.value = lutador_2.pontos
        console.log(lutador_2.pontos)
    }

}
function subtração(opção){
    if (opção=="0"){
        saida = document.getElementById("placar_1")
        lutador_1.pontos-- 
        saida.value = lutador_1.pontos
        console.log(lutador_1.pontos)
    }
    if (opção=="1"){
        saida = document.getElementById("placar_2")
        lutador_2.pontos--
        saida.value = lutador_2.pontos
        console.log(lutador_2.pontos)
    }
}