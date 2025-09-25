//
// Script principal del portafolio
// - Escucha el envío del formulario de contacto
// - Previene el envío real y muestra un mensaje en la consola
// - Incluye validación básica en el cliente
//

document.addEventListener('DOMContentLoaded', function onReady() {
  // Seleccionamos el formulario por su id
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function onSubmit(event) {
    // Evitar recarga de la página
    event.preventDefault();

    // Obtener valores de campos
    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var mensaje = document.getElementById('mensaje');

    // Validación mínima de ejemplo (requeridos)
    var hasErrors = false;
    [nombre, correo, mensaje].forEach(function (input) {
      if (!input.value.trim()) {
        hasErrors = true;
        input.setAttribute('aria-invalid', 'true');
        input.style.borderColor = 'rgba(220, 53, 69, 0.8)'; // rojo suave
      } else {
        input.removeAttribute('aria-invalid');
        input.style.borderColor = '';
      }
    });

    if (hasErrors) {
      console.warn('Completa los campos requeridos antes de enviar.');
      return;
    }

    // Aquí podrías integrar un servicio backend o email API
    // Para esta demo, solo mostramos un mensaje en la consola
    console.log('Formulario enviado correctamente');

    // También podemos mostrar una confirmación visual rápida
    form.reset();
    alert('¡Gracias! Tu mensaje ha sido enviado (demostración).');
  });
});


