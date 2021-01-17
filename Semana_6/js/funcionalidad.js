$("#agregar").on("click", function() {

    $("#partidas").append(" <tr>\
<td><input type='text' class='clave'></td>\
<td><input type='text' class='Descripcion'></td>\
<td><input type='number' class='precio'></td>\
<td><input type='number' class='unidades'></td>\
<td><input type='number' class='importe'></td>\ </tr>");

    $(".precio, .unidades").on("change", function() {
        var tr = $(this).closest("tr");
        CalcularImporte(tr);
        clacularTotales();


    })
})






function CalcularImporte(tr) {

    var precio = Number($(tr).find(".precio").val());
    console.log(precio);

    var unidades = Number($(tr).find(".unidades").val());
    console.log(unidades);

    var importe = precio * unidades;
    console.log(importe);
    $(tr).find(".importe").val(importe);


}

function clacularTotales(tr) {

    var subTotal = 0;
    var iva = 0;
    var total = 0;
    $(".importe").each(function() {

        subTotal = subTotal + Number($(this).val());
        console.log(subTotal);
        iva = subTotal * .16;
        total = subTotal + iva;


    })



    $("#Total").text(total);
    $("#subTotal").text(subTotal);
    $("#iva").text(iva);



}