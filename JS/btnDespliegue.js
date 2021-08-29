document.addEventListener('DOMContentLoaded', function() {

    let btnDesplegar = document.getElementById("btnToggle");
let caja = document.getElementById("desplegable");



btnDesplegar.onclick = function (){

caja.classList.toggle('active');
btnDesplegar.classList.toggle('active');

}

})
