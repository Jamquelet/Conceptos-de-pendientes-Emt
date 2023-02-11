const form = document.querySelector('form');
const result = document.querySelector('#result');

//Concepto de pendiente cuando se presenta alguna novedad por cliente
var ordenDelSuscriptor = "orden del suscriptor, OT-C14-Orden del Suscriptor, no puede, no puede atender y desea reagendar la visita, desea reagendar la visita, user no puede atender, no atiende, no atiende hoy, hoy no atiende, usuario no puede atender, reagendar, reprogramar visita, reprogramar, cliente no puede atender, cliente reprograma la visita, cliente desea reprogramar la visita, cliente reprograma, novedades en  vivienda, tubería obstruida, tuberia obstruida, la tuberia esta obstruida, adecuaciones locativas, modificaciones en el sitio, no hay un adulto en la casa, no hay un adulto que reciba la visita, cliente no esta en el sitio se encuentra un menor de edad,en sitio se encuentra un menor de edad, menor de edad, se encuentra un menor de edad en el sitio, se encuentra menor de edad, no posee equipos necesarios para la instalacion, atiende mañana, no tiene tv, no hay tv, sin tv en sitio, no hay televisores en el sitio, no hay tv para garantizar servicio, no hay computador, user no cuenta con al menos un tv, en sitio no hay televisores";
var clienteNoAutoriza = "no autoriza, OT-C01-Cliente No Autoriza, No autoriza instalacion, cliente no autoriza instalacion, no autoriza reparación, cliente no autoriza repa, no autoriza repa, user no autoriza instalacion, no autoriza reparacion, informa que no ha solicitado nada, cliente no ha solicitado nada, usuario informa que no ha solicitado nada, se visita en jornada diferente a la cita y no permite instalacion, se visita en jornada diferente a la cita y no permite instalación, esperaba la visita en horario am, espera la visita en horario pm, cliente no atiende hoy atiende mañana, se visita en jornada diferente, no deja hacer el servicio, no deja hacer la instalacion";
var clienteIlocalizado ="no hay nadie en casa, OT-C02-Cliente Ilocalizado, no abren, no hay nadie, no abre, no contesta, no esta nadie en casa, en sitio no atienden aun, no atienden aun, usuario ilocalizado, cliente ilocalizado, usuario no esta en la vivienda, no esta";
//Concepto de pendiente cuando se presenta alguna inconsistencia en Datos - Infraestructura u Oferta
var inconsistenciaInformacion = "inconsistencia de la información, inconsistencia de la informacion, OT-C06-Inconsistencia información, inconsistencia informacion, dirección errada, direccion errada, nombre del usuario incorrecto, apellido del usuario incorrecto, nombre apellido, estrato, cedula, ciudad, departamento, telefonos de contacto, teléfonos de contacto, varios pedidos para el mismo predio, ya se realizo la instalacion en esta direccion, pedido en proceso, Varios pedidos para el mismo predio ya sea el mismo o diferente cliente, Ya se realizó la instalación en esta misma dirección o ambos pedidos están en proceso, se debe renumerar por datos del cliente, reconfigurar pedido por datos del cliente, reconfigurar oferta por datos del cliente";
var reconfigurarPedido = "OT-C08-Reconfigurar Pedido, Uso del servicio diferente, Tipos y cantidad de equipos en los decodificadores, agregar deco, agregar decos, sin telefonia, con telefonia, con internet, sin internet, se deben agregar decos, user solo pidio 1 deco, user solo pidio 2 decos, user desea 3 decos, user desea 4 decos, user pidio algo diferente, extenciones, se debe agregan punto cableado, punto de red, extension analoga, plan comercial, se debe cambiar el plan, se debe cambiar la oferta, paquetes premium en tv, paquete onetv, servicio one tv, extensor ap en internet, extensor AP en internet, AP, se debe agregar ap, cambio de tecnologia, cambios de tecnologia, Cambios de Tecnología. se debe renumerar por datos comerciales, reconfigurar pedido por datos comerciales, reconfigurar oferta por datos comerciales, Extensiones análogas, renumerar pedido";
//Concepto de pendiente cuando se presentan factores externos
var ordenPublico = "OT-C04-Orden Público, orden publico, me sacaron, me sacaron de la zona, hombres armados, situacion peligrosa, peligro en la zona, problemas de delincuencia en la zona para instalar o reparar un servicio, delincuencia en la zona, zona peligrosa, obstrucción de la movilidad, obstruccion de la movilidad, fiestas, fiesta, protestas, aglomeraciones, eventos, evento, acceso restringido por orden público, orden público, acceso restringido, peligro";
var factoresClimaticos = "OT-C19-Factores climáticos, lluvias, factores climaticos, factores climáticos, llueve, tormenta, rayos, riesgo electrico por lluvias, esta lloviendo, llueve aun, esta lloviendo, lluvia, lluvia en la zona para instalar o reparar un servicio, desastre natural, desastres naturales, derrumbe, derrumbes, inundacion, inundaciones, inundación, por factores climaticos no es posible llegar donde cliente en poblaciones lejanas";
var autorizacionDeTerceros = "OT-C17-Autorización de Terceros, autorizacion de terceros, autorización de terceros, tubería en construcción, tuberia en construccion, constructora, administracion, administración, cruce de predios en zona rural o urbana, cruce de predios, vecino no autoriza, se debe pasar por predio ajeno, se debe pasar por fachada, no permiten ingreso al personal técnico por parte de administración unidad residencial, parcelación, solo permiten ingreso, no dejan ingresar, la infraestructura asignada se encuentra en una propiedad parcelación unidad y no se puede acceder a ella por algún tipo de permiso, no dan el permiso, se debe ingresar a predio ajeno, se debe ingresar a predio vecino";
//Concepto cuando se presenta una novedad por motivos comerciales
var validarCondicionDeInstalacion = "OT-C10-Validar Condición Instalación, validar la condicion de la instalacion, riesgo electrico, la instalación representa un riesgo que compromete la seguridad del empleado en la actividad, riesgo , instalar por encima de techos, instalar por encima de techo, fluido eléctrico de alta tensión, fluido electrico de alta tension, no se puede realizar por falta de energia, no se puede realizar por falta de fluido eléctrico en el sector, sector sin energia";
var malaAsignacion = "OT-T05-Mala Asignación, la infraestructura asignada no corresponde a la zona, la infraestructura no corresponde, sector con otra tecnologia, se debe instalar por hfc, se debe instalar por gpon";
var gestionFraudesInstalaciones = "OT-C05-Gestión Fraudes Instalaciones, gestion fraudes instalaciones, usuario pide que su instalacion se comparta con otros inmuebles, instalar en otra vivienda, solicita instalar servicio en una direccion diferente, solicita instalación de servicio en una dirección diferente a la regristrada en el CRM, no conocen al solicitante del servicio, no conocen al t";
//Concepto cuando se presente una novedad por motivos técnicos
var redExterna = "sector sin cobertura";
form.addEventListener('submit', event => {
        event.preventDefault();
        const lowerCaseReason = document.querySelector('#reason').value.toLowerCase();
          /*const reason = document.querySelector('#reason').value;  */
          let category;
          
          if (ordenDelSuscriptor.split(',').some(r => lowerCaseReason.includes(r.trim()))) {
            category = 'OT-C14-Orden del Suscriptor';
          } else if (clienteNoAutoriza.split(',').some(r=> lowerCaseReason.includes(r.trim()))) {
            category = 'OT-C01-Cliente No Autoriza';
          } else if (clienteIlocalizado.split(',').some(r=> lowerCaseReason.includes(r.trim()))){
            category = ('OT-C02-Cliente Ilocalizado');
          } else if (inconsistenciaInformacion.split(',').some(r=> lowerCaseReason.includes(r.trim()))) {
            category = ('OT-C06-Inconsistencia Información');
          } else if (reconfigurarPedido.split(',').some(r=> lowerCaseReason.includes(r.trim()))) {
            category = ('OT-C08-Reconfigurar Pedido');
          } else if(ordenPublico.split(',').some(r=> lowerCaseReason.includes(r.trim()))) {
            category = ('OT-C04-Orden Público');
          } else if (factoresClimaticos.split(',').some(r=> lowerCaseReason.includes(r.trim()))) {
            category = ('OT-C19-Factores climáticos');
          } else if (autorizacionDeTerceros.split(',').some(r=>lowerCaseReason.includes(r.trim())) ) {
            category = ('OT-C17-Autorización de Terceros');
          } else if (validarCondicionDeInstalacion.split(',').some(r=>lowerCaseReason.includes(r.trim()))) {
            category =('OT-C10-Validar Condición Instalación');
          } else if (malaAsignacion.split(',').some(r=>lowerCaseReason.includes(r.trim()))) {
            category = ('OT-T05-Mala Asignación');
          } else if (gestionFraudesInstalaciones.split(',').some(r=>toLowerCase.includes(r.trim()))) {
            category =('OT-C05-Gestión Fraudes Instalaciones');
          } else {
            category = 'Refresque la página e ingrese un poco más de información';
          }
  
          result.textContent = `El pendiente correspondiente es: ${category}`;
        });
        

/* const motivoCliente = []; */

