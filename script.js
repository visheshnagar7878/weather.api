const API_KEY = "b46c32b90ca64a29a1651844250206";
function GetWeather() {
     const city = document.getElementById("cityInput").value;
     const result = document.getElementById("weatherResult");
     if(!city) {
        result.innerHTML = "please valid city";
        return;
  }
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`;
  fetch(url)
.then(response => {
     if (!response.ok) throw new Error("City not found");
     return response.json();
  })
    .then(data => {
      const weather = data.current;
      result.innerHTML = `
        <h2 style="margin: 10px 0;">${data.location.name}, ${data.location.country}</h2>
        <p><strong>Temperature:</strong> ${weather.temp_c} °C</p>
        <p><strong>Condition:</strong> ${weather.condition.text}</p>
        <img src="https:${weather.condition.icon}" alt="Weather Icon" />
      `;
    })
    .catch(error => {
      result.innerHTML = `Error: ${error.message};`
    });
}


