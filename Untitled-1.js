function mudar(){
    var color = ["red", "green", "Yellow", "blue", "purple", "orange", "#92b900", "#92b9de", "#9200f3", "#808080"]
    var sorteio = Math.floor(Math.random()*10)
    var novaDiv = document.createElement("div")
    novaDiv.setAttribute('class', 'conteudo')    
    var inserirDiv = document.getElementById('box-content')
    document.body.insertBefore(novaDiv, inserirDiv)
    var cor = color[sorteio]
    novaDiv.style.backgroundColor = (cor)
    console.log(sorteio)
}
