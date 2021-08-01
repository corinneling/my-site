require('dotenv').config();

const getWeather = () => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?id=4509884&units=imperial&appid=${process.env.WEATHER_KEY}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => data)
  .catch((e) => {
    console.log(e.message);
  });
}

export async function addWeather() {
  const url = `/netlify/functions/get-weather`;
  const data = await fetch(url).then((res) => res.json()).catch((e) => console.log(e.message));

  console.log(data, 'data')

  const weatherIcon = document.querySelector('.weather__icon');
  const weatherIconButton = document.querySelector('.weather__button');
  const weatherTemp = document.querySelector('.weather-info__temp');
  const weatherCity = document.querySelector('.weather-info__city');
  

  weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  weatherIconButton.setAttribute('aria-label', data.weather[0].description);
  
  weatherTemp.innerHTML = Math.trunc(data.main.temp);
  weatherTemp.setAttribute('aria-label', `${data.main.temp} degrees Fahrenheit`)

  weatherCity.innerHTML = ` in ${data.name}`;
}
