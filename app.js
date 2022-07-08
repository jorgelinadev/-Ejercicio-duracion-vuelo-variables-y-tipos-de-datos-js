//alert ("Mi archivo está bien linkeado")

//Duración vuelo

//Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la
//duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración 
//y la duración total del vuelo.


const escala1= prompt ('Ingrese primera escala');
const tiempo1 = prompt ('ingrese duracion del viaje en horas');
const escala2= prompt ('Ingrese segunda escala');
const tiempo2= prompt ('ingrese duracion del viaje en horas');
const escala3= prompt ('Ingrese tercera escala ');
const tiempo3 = prompt ( 'ingrese duracion del viaje en horas');

const duracionTotal = ( Number (tiempo1) + Number (tiempo2) + Number ( tiempo3));

console.log (duracionTotal);

alert('Listado de escalas y duracion del viaje: ' + escala1 + ': ' + tiempo1 + ' hs.; ' + escala2 + ': ' + tiempo2 + ' hs.; '  + escala3 + ': ' + tiempo3 + ' hs.; ' + 'Duración total del viaje: ' + duracionTotal + 'hs.');








