function adicionarFilme(){
    var campofilmeFavorito= document.querySelector('#filme')
    var filmeFavorito = campofilmeFavorito.value
    if(filmeFavorito.endsWith('.jpg')){
    listarFilmesNaTela(filmeFavorito)
    }else{
      alert("Imagem Inválida")
    }
    campofilmeFavorito.value= ""
  }
  
  function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme= "<img src=" + filme + ">"
    listaFilmes.innerHTML =listaFilmes.inerHTML + elementoFilme
  }
  
  