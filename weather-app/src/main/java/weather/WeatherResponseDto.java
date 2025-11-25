package com.example.weather;

import lombok.Data;

@Data
public class WeatherResponseDto {
    private String city;
    private String description;
    private double temperature;
    private int humidity;
    private double windSpeed;
}

