import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Grid, Paper } from "@mui/material";
import moment from "moment";

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
  const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(2);
  return (
    <Box sx={{ padding: "20px" }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={4}>
          {forecast?.list.slice(0, 5).map((hour, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{ padding: "10px", background: "#f7f7f7" }}
              >
                <Typography variant="h6" component="div">
                  {moment(hour.dt_txt).format("hh:mm A")}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                    alt="weather icon"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ marginLeft: "10px" }}
                  >
                    {kelvinToCelsius(hour.main.temp)}°C
                  </Typography>
                </Box>
                <Typography variant="body2" component="div">
                  {hour.weather[0].description}
                </Typography>
                <Typography variant="body2" component="div">
                  Humidity: {hour.main.humidity}%
                </Typography>
                <Typography variant="body2" component="div">
                  Wind Speed: {hour.wind.speed} km/h
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

/*  forecast.list.slice(0, 5).map((item, index) => (
            <div key={index}>
              <p>{new Date(item.dt * 1000).toLocaleString()}</p>
              <p>{item.weather[0].description}</p>
              <p>{Math.round(item.main.temp - 273.15)}°C</p>
            </div>
          ))*/
