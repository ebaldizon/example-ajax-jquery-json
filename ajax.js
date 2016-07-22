
function procesar()
{

    var v1 = document.getElementById("text1");
    var v2 = document.getElementById("text2");

    var datos = {"variable1":v1.value, "variable2":v2.value};

    $.ajax({
        url:"procesado.php",
        type:"post",
        data:datos,
        beforeSend: function () {
            $("#respuesta").html("Procesando, espere por favor...");
        },
        success:  function (response) {
            $("#respuesta").html(response);
        }
    });
}