export class Weather {
    apiKey = '1a7a641cd1b831fe17368d4f380abcba';
    apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

    mapResponseToWeatherData(response) {
        const cityName = response.name;
        const temperature = response.main.temp;
        const humidity = response.main.humidity;
        const windSpeed = response.wind.speed;
        const weatherTitle = response.weather[0].main;
        return {
            cityName, temperature, humidity, windSpeed, weatherTitle,
        }
    }

    buildRequestUrl({ lat, lon, city }) {
        const baseUrl = `${this.apiUrl}&appid=${this.apiKey}`;
        return lat && lon ? `${baseUrl}&lat=${lat}&lon=${lon}`
            : `${baseUrl}&q=${city}`
    }

    async getWeatherData(request) {
        const requestUrl = this.buildRequestUrl(request);
        const response = await fetch(requestUrl);
        return response.json();
    }
}
