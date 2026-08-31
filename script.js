// ================================
// MENU MOBILE
// ================================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

        nav.classList.toggle("active");

    });

}


// ================================
// FECHAR MENU AO CLICAR EM LINK
// ================================

if (nav) {

    const links = nav.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("active");

        });

    });

}
