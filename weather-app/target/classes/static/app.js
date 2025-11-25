function getWeather() {
    const city = document.getElementById("cityInput").value;

    fetch(`http://localhost:8080/weather/${city}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML = `
                <h2>${data.city}</h2>
                <p>${data.description}</p>
                <p>Temperature: ${data.temperature} °C</p>
                <p>Humidity: ${data.humidity}%</p>
                <p>Wind Speed: ${data.windSpeed} m/s</p>
            `;
        })
        .catch(err => {
            document.getElementById("result").innerHTML = "<p style='color:red;'>City not found</p>";
        });
}
