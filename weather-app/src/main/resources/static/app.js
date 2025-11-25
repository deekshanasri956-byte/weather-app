const API_URL = "http://localhost:8080/weather/";

function getWeather() {
    let city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(API_URL + city)
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML = `
                <h2>${data.city}</h2>
                <p>${data.description}</p>
                <p><strong>Temperature:</strong> ${data.temperature} °C</p>
                <p><strong>Humidity:</strong> ${data.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.windSpeed} m/s</p>
            `;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

// 🌟 Auto-update every 10 seconds (REAL TIME)
setInterval(() => {
    let city = document.getElementById("cityInput").value;
    if (city !== "") {
        getWeather();
    }
}, 10000); // 10 seconds
