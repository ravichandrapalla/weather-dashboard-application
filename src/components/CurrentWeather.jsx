import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CurrentWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=Tanuku,in&APPID=586f02715bbd15fc8dac2aa749d82516`
      )
      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the weather data!", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2>{weather && weather.name}</h2>
          <p>{weather && weather.weather[0].description}</p>
          <p>{weather && Math.round(weather.main.temp - 273.15)}°C</p>
        </>
      )}
    </div>
  );
}
