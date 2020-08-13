
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion : {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


/* lugar.getLugarLatLng( argv.direccion )
    .then(resp => console.log(resp))
    .catch(console.log); 

clima.getClima(40.750000,-74.000000)
    .then(resp => console.log(resp))
    .catch(console.log)
 */

const getInfo = async ( direccion ) => {

    try {
        resp = await lugar.getLugarLatLng( direccion );

        info = await clima.getClima(resp.lat,resp.lng)

        return `El clima de ${direccion} es de ${info} grados celsius`;
    } catch (_) {
        return `No se pudo determinar el clima de ${direccion}`
    }
    
}

getInfo(argv.direccion)
 .then(console.log)
 .catch(console.log);