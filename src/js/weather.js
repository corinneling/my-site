export async function addWeather() {
  const response = await fetch('/.netlify/functions/get-weather').then(
      response => response.json()
    );

  const { data } = response;

  const weatherIcon = document.querySelector('.weather__icon');
  const weatherIconButton = document.querySelector('.weather__button');
  const weatherTemp = document.querySelector('.weather-info__temp');
  const weatherCity = document.querySelector('.weather-info__city');
  

  weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  weatherIconButton.setAttribute('aria-label', data.weather[0].description);
  
  weatherTemp.innerHTML = Math.trunc(data.main.temp);
  weatherTemp.setAttribute('aria-label', `${data.main.temp} degrees Fahrenheit`)

  weatherCity.innerHTML = ` in ${data.name}`;
}
