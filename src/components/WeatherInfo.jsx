import React, { useContext } from "react";
import { WeatherContext } from "../Context";

export default function WeatherInfo() {
    const { weatherinfo } = useContext(WeatherContext);

    return (
        <div class="text-center">
            <div class="flex flex-col items-center justify-center px-3">
                <h1 class="mt-[3rem] text-gray-600 font-medium">{weatherinfo.name}</h1>
                <div class="flex justify-center items-center space-x-3">
                    <img 
                        src={weatherinfo.icon} 
                        alt="" 
                        class=""
                    />
                    <h1 class="text-lime-900 font-medium mt-1">{weatherinfo.temp}°C</h1>
                    <h2 class="text-3xl text-gray-600 font-medium">{weatherinfo.text}</h2>
                </div>
            </div>
            <div class="border rounded-xl bg-gray-200 py-3 mx-20 mt-16 text-center md:mx-60 lg:mx-72">
                <h3 class="text-gray-600 font-medium text-2xl">{weatherinfo.localTime}</h3>
            </div>
            <div class="bg-slate-800 grid grid-cols-2 text-white absolute py-3 bottom-0 right-0 left-0 md:grid-cols-4">
                <h2>Humidity: {weatherinfo.humidity}</h2>
                <h2>Feels like: {weatherinfo.feelsLike}</h2>
                <h2>Wind Speed: {weatherinfo.windSpeed}</h2>
                <h2>Wind Direction: {weatherinfo.windDirection}</h2>
                <h2>Dew Point: {weatherinfo.dewPoint}</h2>
            </div>
        </div>
    )
}