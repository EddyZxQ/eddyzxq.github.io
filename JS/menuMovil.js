document.addEventListener('DOMContentLoaded', function(){

    btnDespliegue = document.getElementById('btnMenuMovil');

    contenedorMenu = document.getElementById('contenedorMenu');
    overlay = document.getElementById("overlay");

    btnCierre = document.getElementById("menuCierre");


    redireccionarMi = document.getElementById('sobreMii');
    redireccionarContacto = document.getElementById('contactoss');
    redireccionarProyectos = document.getElementById('proyectoss');
    redireccionarHabilidades = document.getElementById('habilidadess');

    btnDespliegue.onclick = function (){
            contenedorMenu.classList.remove('ocultar');
            overlay.classList.remove('ocultar');
    }

    btnCierre.onclick = function (){
        contenedorMenu.classList.add('ocultar');
        overlay.classList.add('ocultar');

    }

    redireccionarMi.onclick = function (){
        window.location.href = '#sobreMi';
    }

    redireccionarContacto.onclick = function (){
        window.location.href = '#contacto';
    }

    redireccionarHabilidades.onclick = function (){
        window.location.href = '#cajonhabilidades';
    }

    redireccionarProyectos.onclick = function (){
        window.location.href = '#cajonproyectos';
    }





})