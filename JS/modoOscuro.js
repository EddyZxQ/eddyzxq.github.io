
document.addEventListener('DOMContentLoaded', function() {


    let btnLuna = document.getElementById("sol");
    let cajaolas = document.getElementById("cajaOlas");
    let principal = document.getElementById("principal");
    let olas = document.getElementById("olas");
    let estadisticas = document.getElementById("estadisticas");
    let contacto = document.getElementById("contacto");
    let pie = document.getElementById("pie");
    let frontend = document.getElementById("frontend");
    let backend = document.getElementById("backend");
    let otras = document.getElementById("otras");
    let hotelSoler = document.getElementById("hotelSoler");
    let clinicaVeterinaria = document.getElementById("clinicaVeterinaria");
    let objetosmenu = document.getElementById("objetosMenu");
    let emailContacto = document.getElementById("emailContacto");
    let sobreMi = document.getElementById("sobreMi");

    btnLuna.onclick = function () {
        btnLuna.classList.toggle("luna");
        cajaolas.classList.toggle("oscuro");
        principal.classList.toggle("oscuro");
        olas.classList.toggle("oscuro");
        estadisticas.classList.toggle("oscuro");
        contacto.classList.toggle("oscuro");
        pie.classList.toggle("oscuro");
        backend.classList.toggle("oscuro");
        frontend.classList.toggle("oscuro");
        otras.classList.toggle("oscuro");
        hotelSoler.classList.toggle("oscuro");
        clinicaVeterinaria.classList.toggle("oscuro");
        objetosmenu.classList.toggle("oscuro");
        emailContacto.classList.toggle("oscuro");
        sobreMi.classList.toggle("oscuro");


    }

})

