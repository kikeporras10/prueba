$( document ).ready(function() {
    getUsuarios();
    timer();
});

/**
 * Obtiene la lista de usuarios.
 */
function getUsuarios() {
    let endpoint = 'http://localhost:8082/api/getUsuarios';
    $.ajax({
        url: endpoint,
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            result.forEach(addItem);
        }
    });
}

/**
 * Agrega un elemento a la lista con la información del usuario.
 * @param item elemento actual de la lista.
 */
function addItem (item) {
    $( '.listaUsuarios' ).after(

        `<div class="usuarios d-flex text-muted pt-3">
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" 
                width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" 
                focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="` + getColor() +  `"/><text x="50%" y="50%" fill="#007bff" dy=".3em"></text></svg>
            <div class="" style="display:contents;">
                <p class="pb-3 mb-0 small lh-sm border-bottom" style="width: 100%;">
                    <strong class="d-block text-gray-dark">Id: ` + item.id + ` </strong>
                    ` + item.nombre + `
                </p>
                <p class="original pb-3 mb-0 small lh-sm border-bottom" style="width: 100%;">
                    <strong class="d-block text-gray-dark">Fecha de logeo: </strong>
                    <i>` + item.fechaLogeo + `</i>
                </p>
                    <p class="diferencia pb-3 mb-0 small lh-sm border-bottom" style="width: 100%;">
                    <strong class="d-block text-gray-dark">Tiempo de logeo: </strong>
                    <i></i>
                </p>
            <div>
        </div>`
    );
}

/**
 * Llamada a la funcion que calcula el tiempo de logeo cada segundo.
 */
function timer() {
    window.setInterval(function(){
       calculaTiempoLogeo()
    }, 1000);
}

/**
 * Obtiene un color aleatoreamente.
 * @returns color
 */
function getColor() {
    var colors = ["#007bff", "#e83e8c", "#6f42c1"];
    return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Calgula el tiempo de logeo en base a la última fecha de logeo
 * que se obtiene del servicio y la fecha actual.
 */
function calculaTiempoLogeo() {
    $( '.usuarios p.original i' ).each(function( index, element ) {
        var fechaOriginal = new Date($(element).text());
        const fechaActual = new Date();

        var diff = (fechaActual - fechaOriginal)/1000;
        diff = Math.abs(Math.floor(diff));

        var days = Math.floor(diff/(24*60*60));
        var leftSec = diff - days * 24*60*60;

        var hrs = Math.floor(leftSec/(60*60));
        var leftSec = leftSec - hrs * 60*60;

        var min = Math.floor(leftSec/(60));
        var leftSec = leftSec - min * 60;

        var parent = $(element).parent().parent();
        $(parent).find(' p.diferencia i').text(days + " días " + hrs + " horas " + min + " minutos y " + leftSec + " segundos.");
    });
}
