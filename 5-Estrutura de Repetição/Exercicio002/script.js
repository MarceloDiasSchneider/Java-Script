function calcular(){
    var inicio = document.querySelector('input#inicio')
    inicio = Number(inicio.value)
    var fim = document.querySelector('input#fim')
    fim = Number(fim.value)
    var passo = document.querySelector('input#passo')
    passo = Number(passo.value)
    if (passo <= 0){
        alert('[Erro] - PASSO não pode ser menor que 1.')
    } else if (inicio >= fim){
        alert('[Erro] - INICIO deve se um número menor que o FIM')
    } else if (passo > fim - inicio ){
        alert('[Erro] - PASSO não pode ser maior que o intervalos ente FIM e INICIO')
    } else{
        var res = document.querySelector('div#conta')
        res.innerText = `Sua conta é:`
        
        for (i = inicio; i <= fim; i += passo){
            res.innerHTML += ` ${i} &#128073;`            
        }
        res.innerHTML += ` &#128406;`            
        
        var botao = document.createElement('input')
        botao.setAttribute('type','button')
        botao.setAttribute('value','Recarregar')
        botao.setAttribute('onClick','recarregar()')
        res.appendChild(botao)
    }
}
function recarregar(){
    location.reload()
}