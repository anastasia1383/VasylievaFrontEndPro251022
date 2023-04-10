export class View {
  constructor({
    wrapperSelector,
    citySelector,
    tempSelector,
    humiditySelector,
    windSelector,
    weatherIconSelector,
  }) {
    this.wrapper = document.querySelector(wrapperSelector);
    this.cityContainer = document.querySelector(citySelector);
    this.tempContainer = document.querySelector(tempSelector);
    this.humidityContainer = document.querySelector(humiditySelector);
    this.windContainer = document.querySelector(windSelector);
    this.weatherIconContainer = document.querySelector(weatherIconSelector);
  }

  renderWeather({ cityName, temperature, humidity, windSpeed, weatherTitle }) {
    this.cityContainer.innerHTML = cityName;
    this.tempContainer.innerHTML = Math.round(temperature) + "°C";
    this.humidityContainer.innerHTML = humidity + "%";
    this.windContainer.innerHTML = windSpeed + "km/h";
    this.weatherIconContainer.src = this.getWeatherIcon(weatherTitle);
  }

  getWeatherIcon(weather) {
    switch (weather) {
      case "Clouds":
        return "images/clouds.png";
      case "Clear":
        return "images/clear.png";
      case "Rain":
        return "images/rain.png";
      case "Drizzle":
        return "images/drizzle.png";
      case "Mist":
        return "images/mist.png";
    }
  }


  setLoadingState(value) {
    if (value) {
      this.wrapper.classList.add('loading');
      return;
    }
    this.wrapper.classList.remove('loading');
  }
}
