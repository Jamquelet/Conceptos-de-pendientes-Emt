const form = document.querySelector('form');
const result = document.querySelector('#result');

const ordenDelSuscriptor = "No puede atender, no puede atender y desea reagendar la visita, desea reagendar la visita, no puede atender, no atiende, no atiende hoy, hoy no atiende, usuario no puede atender, cliente no puede atender, cliente reprograma la visita, cliente desea reprogramar la visita, cliente reprograma, novedades en  vivienda";
  
form.addEventListener('submit', event => {
        event.preventDefault();
        const lowerCaseReason = document.querySelector('#reason').value.toLowerCase();
          /*const reason = document.querySelector('#reason').value; */
          let category;
          
          if (ordenDelSuscriptor.split(',').some(r => lowerCaseReason.includes(r.trim()))) {
            category = 'OT-C14-Orden del Suscriptor';
          } else if (lowerCaseReason.includes('cliente no autoriza')) {
            category = 'Orden del cliente';
          } else {
            category = 'Refresque la página e ingrese un poco más de información';
          }
  
          result.textContent = `El pendiente correspondiente es: ${category}`;
        });


const motivoCliente = [];

