require('dotenv').config();

const getWeather = () => {
  console.log(process.env.WEATHER, 'process.env.WEATHER_KEY');
  return fetch(`https://api.openweathermap.org/data/2.5/weather?id=4509884&units=imperial&appid=f6eb6380698d8fd022e542564ad398b4`)
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
  const data = await getWeather();

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
