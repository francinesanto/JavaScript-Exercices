//var valorEmDolar = parseFloat(prompt("Qual o valor em dolár que você quer converter"))

//var valorEmReal = valorEmDolar * 5.60

//var valorEmRealFixado= valorEmReal.toFixed(2)

//alert(valorEmRealFixado)

function converter(){
    var valorEmDolar= window.document.getElementById("txtn1")
    var res = window.document.getElementById("res")
    
    var valorEmDolarNumber = parseFloat(valorEmDolar.value)
    var taxa = 5.50
    var valorEmReal= valorEmDolarNumber * taxa
    res.innerHTML =' O valor em real é R$ ' + valorEmReal.toFixed(2)
}