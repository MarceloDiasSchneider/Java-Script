function tamanho(){
    var tela = window.innerWidth
    var sec = document.getElementById('section')
    if (tela > 650){
        sec.style.width = '500px'
        //document.getElementById('tamanho').innerHTML = 'if '+tela
    } else {
        sec.style.width = '80%'
        //document.getElementById('tamanho').innerHTML = 'else '+tela
    }
}

function carregar(){  
    var nomes = ''
    var letras = ''
    var n1 = document.getElementById('marcelo').checked
    if (n1 == true) {
        letras += 'M'
        nomes += 'Marcelo'
    }
    var n2 = document.getElementById('tatielli').checked
    if (n2 == true) {
        letras += 'T'
        nomes += ' Tatielli'
    }
    var n3 = document.getElementById('joshua').checked
    if (n3 == true) {
        letras += 'J'
        nomes += ' Joshua'
    }
    var n4 = document.getElementById('tobyMaicon').checked
    if (n4 == true) {
        letras += 'TM'
        nomes += ' Toby Maicon'
    }
    document.getElementById('tamanho').innerHTML = `Fotos de : ${nomes}`
    
    var imagem = document.getElementById('imagem')
    imagem.src = `imagem/${letras}001.jpg`
    
    imagem.style.marginTop = '5px' 
    imagem.style.marginBottom = 'auto' 
    
    /*
    if (letras == 'T' || letras == 'MTTM'){
        imagem.style.transform = 'rotate(180deg)'
    } else if(letras == 'MJTM' || letras == 'TTM' || letras == 'TJTM' || letras == 'MJ'){
        imagem.style.transform = 'rotate(90deg)'
        imagem.style.marginTop = '50px' 
        imagem.style.marginBottom = '50px' 
    } else {
        imagem.style.transform = 'rotate(0deg)'
    }
    */
}