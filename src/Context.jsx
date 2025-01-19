import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

function GlobalState({children}) {
    const [cityName, setCityName] = useState("");
    const [weatherinfo, setWeatherInfo] = useState([]);

    async function fetchWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8b056986316443d4b3730322240712&q=${cityName}&aqi=no`);
        const result = await response.json();

        if (result) {
            setWeatherInfo({
                name: result.location.name,
                icon: result.current.condition.icon,
                text: result.current.condition.text,
                feelsLike: result.current.feelslike_c,
                humidity: result.current.humidity,
                temp: result.current.temp_c,
                windDirection: result.current.wind_dir,
                windSpeed: result.current.wind_kph,
                dewPoint: result.current.dewpoint_c,
                localTime: result.location.localtime
            });
        }
    }

    function handleApiCall() {
        fetchWeather();
    }

    return <WeatherContext.Provider value={{ cityName, setCityName, handleApiCall, weatherinfo, setWeatherInfo }}>{children}</WeatherContext.Provider>
}

export default GlobalState;