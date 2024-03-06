function getWeather() {
    const apiKey = 'b8c83bba5f2f593b8b978f9309b982bb';
    const city = document.getElementById('cityInput').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');

            if (data.cod === '404') {
                weatherInfo.innerHTML = `<p>Cannot find city. Please write your city's name correctly.</p>`;
            } else {
                const description = data.weather[0].description;
                const temperature = (data.main.temp - 273.15).toFixed(2);
                const humidity = data.main.humidity;

                weatherInfo.innerHTML = `
                    <p>Weather: ${description}</p>
                    <p>Temperature: ${temperature} °C</p>
                    <p>Humidity: ${humidity}%</p>
                `;
            }
        })
        .catch(error => console.error('Cannot get weather info.(are you living in mercury??)', error));
}