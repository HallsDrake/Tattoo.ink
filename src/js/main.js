// Função usada para o filtro da galeria

$(document).ready(function () {
    var filterizd = $(".filtr-container").filterizr({});

    $(".listaFiltroItem").on('click', function () {
        $(".listaFiltroItem").removeClass("active");
        $(this).addClass("active");
    });
});

// tooltip da sessão estilos
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip({ animation: true });
});


// Aplica a sombra animada no botão
$(document).ready(function (buttonPulse) {
    setInterval(function () {
        // console.log("work")
        $(".btnPulse").css("box-shadow", "0px 0px 25px #128c7e");
    }, 750)
});
$(document).ready(function (buttonRecovery) {
    setInterval(function () {
        // console.log("work2")
        $(".btnPulse").css("box-shadow", "0px 0px 15px #075e54");
    }, 1500)
});

// Aplica a borda animada no botão instagram
$(document).ready(function (btnInsta) {
    setInterval(function () {
        // console.log("work")
        $(".btnInsta").css("box-shadow", "0px 0px 25px #128c7e");
    }, 750)
});
$(document).ready(function (btnInsta) {
    setInterval(function () {
        // console.log("work2")
        $(".btnInsta").css("box-shadow", "0px 0px 15px #075e54");

    }, 1500)
});

// Contador e rotator dos números apresentados na sessão count
$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 1400,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// Função para que o menu apareça na rolagem
var ValueY = window.pageYOffset;
window.onscroll = function () {
    var currentValueY = window.pageYOffset;
    if (ValueY > currentValueY) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";

    }
    ValueY = currentValueY;
}

// Função deslize suave pela página
$(function () {
    $('a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1000, 'swing');
    });
});

// função de animação das telas ao rolar
const bounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();
if (target.length) {
    window.addEventListener('scroll', function () {
        animeScroll();
    })
}