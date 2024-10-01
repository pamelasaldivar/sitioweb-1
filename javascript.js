const apiKey = 'TU_API_KEY';  // Reemplaza con tu clave API

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ciudad no encontrada');
      }
      return response.json();
    })
    .then(data => {
      // Mostrar los resultados en el DOM
      document.getElementById('cityName').innerText = data.name;
      document.getElementById('temperature').innerText = `Temperatura: ${data.main.temp}°C`;
      document.getElementById('description').innerText = `Descripción: ${data.weather[0].description}`;
      document.getElementById('humidity').innerText = `Humedad: ${data.main.humidity}%`;
    })
    .catch(error => {
      alert('Error: ' + error.message);
    });
}
