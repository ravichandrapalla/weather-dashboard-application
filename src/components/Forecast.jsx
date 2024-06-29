import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Forecast() {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=Tanuku&appid=586f02715bbd15fc8dac2aa749d82516"
      )
      .then((resp) => {
        console.log(resp.data);
        const { city, list } = resp.data;
        const data = { ...city, list };
        setForecast(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the forecast data!", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          forecast?.list &&
          forecast.list.slice(0, 5).map((item, index) => (
            <div key={index}>
              <p>{new Date(item.dt * 1000).toLocaleString()}</p>
              <p>{item.weather[0].description}</p>
              <p>{Math.round(item.main.temp - 273.15)}°C</p>
            </div>
          ))
          //   <h1>Hello</h1>
        )}
      </div>
    </div>
  );
}
