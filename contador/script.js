function contar(){

var inicio= document.getElementById("inicio")// ligacao com o input de id inicio
var fim= document.getElementById("fim")// ligacao com o input de id fim
var passo= document.getElementById("passo") //ligacao com o input de id passo
var res = document.getElementById("res")//LIGACAO COM O IMPUT DE ID RES

if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = "Impossivel contar"
    window.alert("ERRO!Faltam Dados")
  
    
}else{
    res.innerHTML="Contando... </br>"
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(p <= 0){
        window.alert("Passo inválido!Considerando Passo 1")
        p = 1

    }

    if(i < f){
        //contagem crescente
    for(var c = i; c <= f; c += p){
        res.innerHTML +=  c + " "  
    }
    
}else{
    //contagem decrescente
    for(var c = i; c >= f; c -= p)
    res.innerHTML += c + " "
}
}

}