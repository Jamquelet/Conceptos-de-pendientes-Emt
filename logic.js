const form = document.querySelector('form');
const result = document.querySelector('#result');

const ordenDelSuscriptor = "No puede atender, no puede atender y desea reagendar la visita, desea reagendar la visita, user no puede atender, no atiende, no atiende hoy, hoy no atiende, usuario no puede atender, cliente no puede atender, cliente reprograma la visita, cliente desea reprogramar la visita, cliente reprograma, novedades en  vivienda, tubería obstruida, tuberia obstruida, la tuberia esta obstruida, adecuaciones locativas, modificaciones en el sitio, no hay un adulto en la casa, no hay un adulto que reciba la visita, cliente no esta en el sitio se encuentra un menor de edad,en sitio se encuentra un menor de edad, menor de edad, se encuentra un menor de edad en el sitio, se encuentra menor de edad, no posee equipos necesarios para la instalacion, no tiene tv, no hay televisores en el sitio, no hay tv para garantizar servicio, no hay computador, user no cuenta con al menos un tv, en sitio no hay televisores";
const clienteNoAutoriza = "No autoriza instalacion, cliente no autoriza instalacion";
  
form.addEventListener('submit', event => {
        event.preventDefault();
        const lowerCaseReason = document.querySelector('#reason').value.toLowerCase();
          /*const reason = document.querySelector('#reason').value; */
          let category;
          
          if (ordenDelSuscriptor.split(',').some(r => lowerCaseReason.includes(r.trim()))) {
            category = 'OT-C14-Orden del Suscriptor';
          } else if (clienteNoAutoriza.split(',').some(r=> lowerCaseReason.includes(r.trim()))) {
            category = 'OT-C01-CLiente No Autoriza';
          } else {
            category = 'Refresque la página e ingrese un poco más de información';
          }
  
          result.textContent = `El pendiente correspondiente es: ${category}`;
        });


const motivoCliente = [];

