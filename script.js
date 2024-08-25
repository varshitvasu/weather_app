const apiKey = 'Enter API Key';



document.getElementById('search-btn').addEventListener('click', ()=>{
    const city = document.getElementById('city-input').value;
    if (city){
        getWeather(city);
    }
})

function getWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(url)
    .then(response => response.json()
    .then(data => {
        if (data.cod==200){
            displayWeather(data);
        } else {
            alert('City not found');
        }
    })
    .catch(error => console.error('Error fetching weather data:', error))
)
}

function displayWeather(data) {
    const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
}