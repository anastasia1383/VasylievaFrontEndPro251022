import vendors from './js/vendors';
import { Weather, View, Geolocation } from './js/modules'

window.addEventListener("DOMContentLoaded", async () => {
  vendors.select.init('#city-select');

  const selectBox = document.querySelector('#city-select');
  const storedLocation = localStorage.getItem('storedLocation');

  let initialRequest = {
    lat: null,
    lon: null,
    city: null,
  };

  const weatherView = new View({
    wrapperSelector: '.weather',
    citySelector: '.city',
    tempSelector: '.temp',
    humiditySelector: '.humidity',
    windSelector: '.wind',
    weatherIconSelector: '.weather-icon'
  });

  weatherView.setLoadingState(true);

  const geolocationService = new Geolocation();
  const weatherService = new Weather();

  if (storedLocation) {
    initialRequest = JSON.parse(storedLocation);
    selectBox.customSelect.value = initialRequest.city || 'default';
  }

  if (selectBox.value === 'default') {
    const geo = await geolocationService.detectLocation().catch(() => {
      weatherView.setLoadingState(false);
    });
    initialRequest = {
      ...geo,
      city: 'Kharkiv',
    }
  }

  const weather = await weatherService.getWeatherData(initialRequest);
  const weatherData = weatherService.mapResponseToWeatherData(weather);
  weatherView.renderWeather(weatherData);
  weatherView.setLoadingState(false);

  selectBox.addEventListener('change',
    async (e) => {
      weatherView.setLoadingState(true);
      const value = e.target.value;
      let request;
      if (value === 'default') {
        const geo = await geolocationService.detectLocation().catch((e) => {
          weatherView.setLoadingState(false);
        }); request = {
          ...geo,
          city: 'Kharkiv',
        }
      } else {
        request = {
          city: value,
        }
      }

      localStorage.setItem('storedLocation', JSON.stringify(request));
      const weather = await weatherService.getWeatherData(request);
      const weatherData = weatherService.mapResponseToWeatherData(weather);
      weatherView.renderWeather(weatherData);
      weatherView.setLoadingState(false);
    });
})
