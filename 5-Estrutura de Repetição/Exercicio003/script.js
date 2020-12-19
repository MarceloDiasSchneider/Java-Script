function calcular() {
    var res = document.querySelector('div#taboada')
    res.innerHTML = ''
    
    var select = document.createElement('select')
    select.setAttribute('name','select')
    select.setAttribute('id','select')
    select.setAttribute('size','10')
    res.appendChild(select)
    
    var numero = document.getElementById('n')
    var n = Number(numero.value)
    
    for (var i = 1; i <= 10; i++){
        var option = document.createElement('option')
        option.text += `${n} x ${i} = ${n*i}`
        select.appendChild(option)
    }
}