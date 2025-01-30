const apiKey = "5ebc7540c56609783b802cfd1bda27fe"; // Replace with your API Key

// Function to fetch weather data
function getWeather() {
  const city = document.getElementById("city").value.trim(); // Trim spaces

  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Show loading text
  document.getElementById("weather-info").innerHTML = "Fetching weather...";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`City not found! (${response.status})`);
      }
      return response.json();
    })
    .then((data) => displayWeather(data))
    .catch((error) => {
      document.getElementById("weather-info").innerHTML = `<p style="color: red;">${error.message}</p>`;
    });
}

// Function to display weather information
function displayWeather(data) {
  document.getElementById("weather-info").innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>🌡️ Temperature: ${data.main.temp}°C</p>
    <p>🌤️ Weather: ${data.weather[0].description}</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
  `;
}
