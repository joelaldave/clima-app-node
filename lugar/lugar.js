const axios = require('axios');




const getLugarLatLng = async (dir) => {

    const encodeUrl = encodeURI(dir);

    const resp = await axios.get(`https://geocode.xyz/?locate=location?city=${dir}&auth=232474160323608905640x7070&json=1`);


    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.standard.city + ' ' + data.standard.countryname;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports ={
    getLugarLatLng
}


