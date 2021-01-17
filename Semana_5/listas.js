$(document).ready(
    function() {
        $("#tarea").on("focus", function(e) {
            $(this).css("background-color", "blue");

        })

        $("#editar").on("mouseenter", function(e) {
            $(this).css({ "text-transform": 'uppercase', "background-color": 'black', "color": 'blue' });

        });

        $("#agregar").on('click', function(e) {
            var tarea = $('#tarea').val();
            $("#lista>li").append("<li>" + tarea + "</li>");

        })

        $("#limpiar").on('click', function(e) {
            $("#tarea").val('');

        });

        $("#lista>li").on('click', function(e) {
            //$(this).css("color", "blue");
            var tareaHecha = $("#lista>li").text();
            $('#hecha>li').append("<li>" + tareaHecha + "</li>");


        });



    }
)