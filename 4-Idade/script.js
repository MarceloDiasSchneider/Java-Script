function verificar(){
    var anoAtual = new Date().getFullYear()
    var anoInformado = document.getElementById('ano').value
    var idade = anoAtual - anoInformado
    var classificacao = ''
    
    if (idade < 10){
        classificacao = 'crianca'
    } else if (idade >= 10 && idade < 22){
        classificacao = 'jovem'
    } else if (idade >=22 && idade < 60){
        classificacao = 'adulto'
    } else {
        classificacao = 'velho'
    }
    
    var mas = document.getElementById('mas').checked
    var fem = document.getElementById('fem').checked
    if (mas == true){
        sexo = 'homem'
    } else if (fem == true) {
        sexo = 'mulher'
    }

    var imagem = document.createElement('img')
    imagem.setAttribute('id', 'imagem')
    imagem.setAttribute('src', `Imagem/${sexo}_${classificacao}.png`)
    
    var txt = document.getElementById('res')
    txt.innerHTML = `<p>Encontramos uma ${sexo} com ${idade} anos de idade.</p>`
    txt.appendChild(imagem)
    
}
