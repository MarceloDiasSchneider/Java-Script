
var numeros = []
// faz o sorteio de númeor e chama a função de validação e inclusão.
function sortear(){
    var n = document.querySelector('#numeros')
    var s = Math.floor(Math.random() * 100) + 1
    n.value = s
    valinf()
}

// Botão de menos
function menos(){
    var n = document.querySelector('#numeros')
    var teste = Number(n.value)
    if (teste > 1 ){
        teste--
    } else {
        alert('O valor não pode ser menor que 1')
    } 
    n.value = teste
    valinf()
}
// Botão de mais
function mais(){
    var n = document.querySelector('#numeros')
    var teste = Number(n.value)
    if (teste < 100 ){
        teste++
    } else {
        alert('O valor não pode ser maior que 100')
    }
    n.value = teste
    valinf()
}

function valinf(){
    var num = document.querySelector('input#numeros')
    num = Number(num.value)
    var teste = 0
    // verifica se o número é valido
    if (num < 1 || num > 100 ){
        alert('[ERRO!] Informe valores entre 1 e 100.')
    } else{
        // Verifica se o número já havia sido escolido
        for (v in numeros){
            if(numeros[v] == num){
                teste++
                alert(`[ERRO!] O número ${num} já foi informado`)
            }              
        }
        // Altera o texto
        if (numeros.length == 0){
            var res = document.querySelector('#txt')
            res.innerHTML = '<P>Valores adicionados:</P>'
        }
        // Adiciona os números escolhidos
        if (teste == 0) {
            numeros.push(num)
            var res = document.querySelector('#resultado')
            var cNum = document.createElement('div')
            cNum.setAttribute('id',`p${num}`)
            cNum.setAttribute('class','classNumeros')
            cNum.innerHTML += `${num}`
            var cBtn = document.createElement('input')
            cBtn.setAttribute('type','button')
            cBtn.setAttribute('value','X')
            cBtn.setAttribute('id',`btn${num}`)
            cBtn.setAttribute('class',`btnExcluir`)
            cBtn.setAttribute('onClick',`excluir(${num})`)
            res.appendChild(cNum)
            cNum.appendChild(cBtn)

        }
    }
}
function excluir(n){
    var apagar = document.getElementById(`p${n}`)
    apagar.remove()
    var enc_Index = numeros.indexOf(n)
    numeros.splice(enc_Index,1)    
    
}
function verArray(){
    alert(numeros)
}