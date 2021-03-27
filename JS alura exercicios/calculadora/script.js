/*var primeiroValor= parseInt(prompt("Digite aqui o primeiro valor"))

var segundoValor=parseInt(prompt("Digite aqui o segundo valor"))

var operacao = prompt("Digite 1 para divisão, 2 para multiplicação, 3 para soma, 4 para subtração")

  if(operacao == 1 ){
    var resultado = primeiroValor / segundoValor
   document.write("<h2> " + primeiroValor + " / " + segundoValor + " = " +  resultado + "</h2>")
  }else if(operacao == 2){
    var resultado = primeiroValor * segundoValor
    document.write("<h2> " + primeiroValor + " * " + segundoValor + " = " +  resultado + "</h2>")
  } else if(operacao == 3 ){
    var resultado = primeiroValor + segundoValor
    document.write("<h2> " + primeiroValor + " + " + segundoValor + " = " +  resultado + "</h2>")
 }else if(operacao == 4){
   var resultado = primeiroValor -segundoValor
   document.write("<h2> " + primeiroValor + " - " + segundoValor + " = " +  resultado + "</h2>")
 }else{
   document.write("<h2>" + " OPÇÃO INVÁLIDA" + "</h2>")}*/

   function operacao(){
     var primeiroNumero = window.document.getElementById("txtN1")
     var segundoNumero = window.document.getElementById("txtN2")
     var operacao = window.document.getElementById("txtN3")
     var res = window.document.getElementById("res")

     if(operacao == 1 ){
      var resultado = primeiroNumero / segundoNumero
      res.innerHTML = primeiroNumero + " / " + segundoNumero + " = " +  resultado  
    }else if(operacao == 2){
      var resultado = primeiroNumero * segundoNumero
      res.innerHTML = primeiroNumero + " * " + segundoNumero + " = " +  resultado 
    } else if(operacao == 3 ){
      var resultado = primeiroNumero + segundoNumero
      res.innerHTML = primeiroNumero + " + " + segundoNumero + " = " +  resultado
   }else if(operacao == 4){
     var resultado = primeiroNumero - segundoNumero
     res.innerHTML = primeiroNumero + " - " + segundoNumero + " = " +  resultado 
   }else{
     res.innerHTML = " OPÇÃO INVÁLIDA"  }
   }