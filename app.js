var formulario = document.getElementById('formulario');
var respuesa = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
    // con el e.PreventDefault se evita que se procese lo que viene por defecto en el navegador con el botón submit
    e.preventDefault();
    console.log('me diste un click')

    var datos = new FormData(formulario)

    console.log(datos)
    console.log(datos.get('usuario'))
    console.log(datos.get('pass'))

    // Enviando datos a post.php a través del método post
    fetch('post.php', {
        method: 'POST',
        body: datos
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data === 'error'){
                respuesta.innerHTML = `<div class="alert alert-danger" role="alert">
                Por favor, llena todos los campos
                </div>`
            }else{
                respuesta.innerHTML = `<div class="alert alert-primary" role="alert">
                ${data}
                </div>`                
            }
        })
})