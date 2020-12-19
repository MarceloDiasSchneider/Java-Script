window.addEventListener('resize', tamanho)

function tamanho(){
    var tela = window.innerWidth
        if (tela > 780) {
            document.getElementById('section').style.width = '550px'
            document.querySelector('footer#footer').style.color = 'silver'
        } else {
            document.getElementById('section').style.width = '80%'
            document.querySelector('footer#footer').style.color = 'black'
        }
}

function atualiza(){
    var corpo = document.body
    var dhora = document.getElementById('dHora')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    //hora = Math.floor(Math.random() * 23)
    var minutos = data.getMinutes()
    if (hora >= 5 && hora < 13){
        dhora.innerHTML = `<p><strong>BOM DIA</strong><p>`
        dhora.innerHTML += `<p>Agora são ${hora} horas e ${minutos} minutos<p>`
        foto.src = 'BomDia.jpg'
        corpo.style.background = '#ff9900'
    } else if (hora >= 13 && hora < 19){
        dhora.innerHTML = `<p><strong>BOA TARDE</strong><p>`
        dhora.innerHTML += `<p>Agora são ${hora} horas e ${minutos} minutos<p>`
        foto.src = 'BoaTarde.jpg'
        corpo.style.background = '#0f54af'
    } else if (hora >=19 || hora < 5){
        dhora.innerHTML = `<p><strong>BOA NOITE</strong><p>`
        dhora.innerHTML += `<p>Agora são ${hora} horas e ${minutos} minutos<p>`
        foto.src = 'BoaNoite.jpg'
        corpo.style.background = '#021936'
    }
}
