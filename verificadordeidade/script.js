function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")//faz a ligação com o input com id txtano
    var res = document.querySelector("div#res")

    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente" )
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src","meninobebe.png")
            
            }else if(idade < 21){
                //jovem
                img.setAttribute("src","homemjovem.png")
            }else if(idade < 50){
                //adulto
                img.setAttribute("src","homemadulto.png")
            }else{
                //idoso
                img.setAttribute("src","homemidoso.png")
            }
        }else if(fsex[1].checked){
            genero ="Mulher"
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src","meninabebe.png")
            
            }else if(idade < 21){
                //jovem
                img.setAttribute("src","mulherjovem.png")
            }else if(idade < 50){
                //adulto
                img.setAttribute("src","mulheradulto.png")
            }else{
                //idoso
                img.setAttribute("src","mulheridosa.png")
            }
        }
        res.innerHTML ="Detectamos a idade " + genero + " com " + idade + " anos "
        res.appendChild(img)
    }
}
