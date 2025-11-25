package com.example.weather;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.json.JSONObject;

@Service
public class WeatherService {

    @Value("${WEATHER_API_KEY}")
    private String API_KEY;  // <-- this is the correct variable

    public WeatherResponseDto getWeather(String city) {

        String url = "https://api.openweathermap.org/data/2.5/weather?q="
                + city + "&appid=" + API_KEY + "&units=metric";

        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(url, String.class);

        JSONObject json = new JSONObject(response);

        WeatherResponseDto dto = new WeatherResponseDto();
        dto.setCity(json.getString("name"));
        dto.setDescription(json.getJSONArray("weather").getJSONObject(0).getString("description"));
        dto.setTemperature(json.getJSONObject("main").getDouble("temp"));
        dto.setHumidity(json.getJSONObject("main").getInt("humidity"));
        dto.setWindSpeed(json.getJSONObject("wind").getDouble("speed"));

        return dto;
    }
}

