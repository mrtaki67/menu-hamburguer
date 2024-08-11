const hamburguerButton = document.getElementById("hamburguerButton")

const MobileMenu = document.getElementById("mobileMenu")

hamburguerButton.addEventListener("click", function(){
    MobileMenu.classList.toggle("flex")
})

// evento para esconder o menu quando a tela for maior que 768px
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove("flex");
    }
});

