const axios = require('axios');


const getClima = async ( lat, lng ) => {

    const resp= await  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d0fe177650d44747515ee9e4790075a5&units=metric`);
    return resp.data.main.temp;
}
module.exports = {
    getClima
}