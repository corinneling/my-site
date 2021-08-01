const axios = require("axios");

exports.handler = async function (event, context) {
  console.log(event);
  console.log(context);
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=4509884&units=imperial&appid=${process.env.WEATHER_KEY}`);
    return {
      statusCode: 200,
      body: JSON.stringify({ title: response.data }),
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
