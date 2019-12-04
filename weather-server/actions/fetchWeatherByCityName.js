const axios = require('axios');

module.exports = async function(cityName) {
  let resp;
  try {
    response = await axios({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=665c8e98e586f364800fd238b845d042&units=metric&lang=en`,
      method: 'get'
    });
    resp = response.data;
  } catch (error) {
    resp = {
    message: error.response.statusText
  };
  }
  return resp;
};
