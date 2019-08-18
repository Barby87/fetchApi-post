<?php

// Creando variables usuario y contraseña
$usuario = $_POST['usuario'];
$pass = $_POST['pass'];

// Mandando una respuesta al archivo js
// Condicional ara campo vacío
if($usuario === ''|| $pass === ''){
    // Mandando respuesta en formato json
    echo json_encode('error');
}else{
    echo json_encode('Correcto: <br>Usuario:' .$usuario.'<br>Pass:'.$pass);
}