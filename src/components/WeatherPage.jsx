import React, { useContext } from "react";
import { WeatherContext } from "../Context";

export default function WeatherPage() {
    const { cityName, setCityName, handleApiCall, } = useContext(WeatherContext);

    return (
        <div>
            <div class="flex items-center justify-center space-x-4 pt-20">
                <form>
                    <input 
                        type="text" 
                        class="px-4 py-1 ml-1 rounded border-b-[1px] w-[20rem] outline-none sm:w-[23rem]"
                        placeholder="Enter Name of City"
                        id="cityName"
                        name="cityName"
                        value={cityName}
                        onChange={(event) => setCityName(event.target.value)}
                    />
                </form>
                <span onClick={handleApiCall}>
                    <ion-icon class="text-4xl mt-1 cursor-pointer" name="search-circle"></ion-icon>
                </span>
            </div>   
        </div>  
    )
}