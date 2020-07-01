document.querySelector("#icon").addEventListener("click", function() {
    document.querySelector("#nav").classList.toggle("show");
    document.querySelector("#icon").classList.toggle("icon-move");
    document.querySelector("body").classList.toggle("body-opc");
})

function bodyload() {
    document.getElementById("pre-loader").style.display = "none";
}

// mybutton = ;
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-100px";
        }
        if (prevScrollpos < currentScrollPos) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
        prevScrollpos = currentScrollPos;

    }
    // go to top function
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// 


var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

})