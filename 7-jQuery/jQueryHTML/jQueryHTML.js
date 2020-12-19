$(document).ready(
    function(){
        $('li').click(
            function (){
                $(this).hide()
            }
        )
    }
)

$(document).ready(
    function(){
        $('#btn1').mouseover(
            function(){
                $('#paragrafo').html("<b>Agora estou em negrito</b>")
            }
        )
    }
)
$(document).ready(
    function(){
        $('#btn1').click(
            function(){
                $('#paragrafo').append(`<p>Eu fui inseriodo</p>`)
            }
        )
    }
)

$(document).ready(
    function(){
        $('#btn2').click(
            function(){
                $('#li1').text("Texto 1 alterado")
                $('#li2').text("Texto 2 alterado")
                $('#li3').text("Texto 3 alterado")
                $('#li4').text("Texto 4 alterado")
            }
        )
    }
)

$(document).ready(
    function(){
        $('#btn3').dblclick(
            function(){
                $(this).attr(
                    {
                        'value':'Eu fui clickado'
                    }
                )
                $('#inputText').val('Você clicou no botão')
            }
        )
    }
)

