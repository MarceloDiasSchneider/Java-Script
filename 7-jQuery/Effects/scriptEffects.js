window.addEventListener('resize', setAltura)

function setAltura(){
    let getAltura = $(window).height()
    document.getElementsByClassName("divPrincipal")[0].style.height = `${getAltura}px`
}

$(document).ready(
    function(){
        $("#btn1").click( 
            btn1clicked 
        )
    }
)
$(document).ready(
    function(){
    $("#btn2").mouseover(
        btn2clicked
        )
    }
)
$(document).ready(
    function(){
        $("#btn3").mouseout(
            btn3clicked
        )
    }
)
$(document).ready(
    function(){
        $("#btn4").dblclick(
            btn4clicked
        )
    }
)
$(document).ready(
    function(){
        $("#btn5").dblclick(
            btn5clicked
        )
    }
)
$(document).ready(
    function(){
        $("#btn6").dblclick(
            btn6clicked
        )
    }
)
$(document).ready(
    function(){
        $("#btn7").mouseover(
            btn7clicked
        )
    }
)
$(document).ready(
    function(){
        $("#btn8").click(
            function(){
                $('.div1, .div2, .div3').stop()
            }
        )
    }
)


function btn1clicked(){
    $('.div1').toggle(3000)
} 
function btn2clicked(){
    $('.div2').fadeToggle(3000)
}
function btn3clicked(){
    $('.div3').slideToggle(3000)
}
function btn4clicked(){
    $('.div1, .div2, .div3').animate(
        {
            width: '50%',
            height: '15%'
        }
    ), btn1clicked(), btn2clicked(), btn3clicked()
}
function btn5clicked(){
    $('.div1, .div2, .div3').animate(
        {
            width: '25%',
            height: '5%'
        }, 3000
    )
}
function btn6clicked(){
    let divs = $('.div1, .div2, .div3')
        divs.animate(
            {
                height: '75%'
            }, 3000
        )
        divs.animate(
            {
                width: '100%'
            }, 1000
        )
        
}
function btn7clicked(){
    $('.div1, .div2, .div3').animate(
        {
            width: '100%',
            height: '30%'
        }
    )
}
