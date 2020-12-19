function criar(){
    var corpo = document.getElementById('corpo')
    var r = 2//window.prompt('Informe um número')
    var oqueCriar = 'p'//window.prompt('Escolha uma Tag HTML')
    var n = 1
    while (n <= r){
        var tagHTML = document.createElement(oqueCriar)
        tagHTML.innerHTML = `${n} While`
        corpo.appendChild(tagHTML)
        n++
    }

    do {
        var tagHTML = document.createElement(oqueCriar)
        tagHTML.innerHTML = `${n} Do While`
        corpo.appendChild(tagHTML)
        n--
    } while(n >= 1)

    // Estrutura de controle com variavel de controle
    for (var i = 1; i <= r;i++ ){
        var tagHTML = document.createElement(oqueCriar)
        tagHTML.innerHTML = `${i} For`
        corpo.appendChild(tagHTML)
    }
    //Arrays
    var a = [0,5,3]
    a[2] = 2
    a.push(9)
    a.push(4)
    a.sort()
    
    var tagHTML = document.createElement(oqueCriar)
    tagHTML.innerHTML += `Array "a":`
    corpo.appendChild(tagHTML)
    for (i = 0; i < a.length; i++){
        var tagHTML = document.createElement(oqueCriar)
        tagHTML.innerHTML += `indexOf(${i}): ${a.indexOf(i)}`
        corpo.appendChild(tagHTML)
    }
    
    var tagHTML = document.createElement(oqueCriar)
    tagHTML.innerHTML = `fon (i in "array"):`
    for (i in a){
        tagHTML.innerHTML += ` ${a[i]}`
    }
    corpo.appendChild(tagHTML)
    
    //function com(parametro)        
    function soma(n1=1,n2=1){
        return n1 + n2
    }
    var num1 = window.prompt('Escola um número')
    var num2 = window.prompt('Escola outro número') 
    
    num1 = Number(num1)
    num2 = Number(num2)
    
    var res = soma(num1,num2)
    
    var tagHTML = document.createElement(oqueCriar)
    tagHTML.innerHTML += `${res}`
    corpo.appendChild(tagHTML)
    
    //function recursiva
    
    function fatorial(n){
        if (n == 1){
            return 1
        } else {
            return n * fatorial(n - 1)
        }
    }
    var fat = window.prompt('Número para fatorial')
    fat = Number(fat)
    var res = fatorial(fat)
    
    var tagHTML = document.createElement(oqueCriar)
    tagHTML.innerHTML = res
    corpo.appendChild(tagHTML)
}