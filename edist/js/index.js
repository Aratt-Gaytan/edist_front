// Definir la URL a la que deseas enviar la solicitud POST
const url = 'http://localhost:3000/user/login';

function registrar(){

// Datos que deseas enviar en el cuerpo de la solicitud POST (en este caso, un objeto JSON)
const data = {
    email: document.getElementById("username").value,
  
    contrasena: document.getElementById("password").value
  };
  
  // Opciones de la solicitud, incluyendo el método HTTP (POST), el cuerpo (body) y los encabezados (headers)
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Indica que estamos enviando datos JSON en el cuerpo
    },
    body: JSON.stringify(data) // Convierte el objeto JavaScript en una cadena JSON
  };
  
  // Realizar la solicitud POST usando fetch
  fetch(url, requestOptions)
    .then(response => {
        console.log(response)
      if (!response.ok) {
        throw new Error('Error en la solicitud POST');
      }
      // Redirigir a una URL específica
        window.location.href = "inicio.html";
// Parsea la respuesta JSON si la solicitud es exitosa
    })
    .then(data => {
      console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
      console.log( error);
    });
  
}
