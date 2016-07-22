<?php
$var1 = $_POST['variable1'];
$var2 = $_POST['variable2'];

// Array con las respuestas
$respuesta = "hola, esta es la variable 1:".$var1.", y esta la variable 2:".$var2;

echo $respuesta;

//echo json_encode($respuesta);	// Enviar la respuesta al cliente en formato JSON
?>