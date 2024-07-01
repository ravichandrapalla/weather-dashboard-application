import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Grid, Paper } from "@mui/material";
import moment from "moment";

export default function CurrentWeather() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=Tanuku,in&APPID=586f02715bbd15fc8dac2aa749d82516`
      )
      .then((response) => {
        setCurrentWeather(response.data);
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
    <Box sx={{ padding: "20px" }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {currentWeather && (
            <Grid item xs={12} md={6}>
              <Card sx={{ background: "#f0f0f0", height: "100%" }}>
                <CardContent>
                  <Typography variant="h4" component="div" gutterBottom>
                    Current Weather in {currentWeather.name},{" "}
                    {currentWeather.sys.country}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                      alt="weather icon"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <Typography variant="h6" component="div">
                      Temperature:{" "}
                      {Math.round(currentWeather.main.temp - 273.15)}
                      °C
                    </Typography>
                  </Box>
                  <Typography variant="body1" component="div">
                    {currentWeather.weather[0].description}
                  </Typography>
                  <Typography variant="body2" component="div">
                    Humidity: {currentWeather.main.humidity}%
                  </Typography>
                  <Typography variant="body2" component="div">
                    Wind Speed: {currentWeather.wind.speed} km/h
                  </Typography>
                  <Typography variant="body2" component="div">
                    Cloudiness: {currentWeather.clouds.all}%
                  </Typography>
                  <Typography variant="body2" component="div">
                    Sunrise:{" "}
                    {moment.unix(currentWeather.sys.sunrise).format("hh:mm A")}
                  </Typography>
                  <Typography variant="body2" component="div">
                    Sunset:{" "}
                    {moment.unix(currentWeather.sys.sunset).format("hh:mm A")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
        </>
      )}
    </Box>
  );
}

/*  <Grid item xs={12} md={6}>
              <Card sx={{ background: "#f0f0f0", height: "100%" }}>
                <CardContent>
                  <Typography variant="h4" component="div" gutterBottom>
                    Current Weather
                  </Typography>
                  <Typography variant="h6" component="div">
                    {Math.round(currentWeather.main.temp - 273.15)}°C
                  </Typography>
                  <Typography variant="h6" component="div">
                    Feels Like{" "}
                    {Math.round(currentWeather.main.feels_like - 273.15)}°C
                  </Typography>
                  <Typography variant="body1" component="div">
                    {currentWeather.weather[0].description}
                  </Typography>
                  <Typography variant="body2" component="div">
                    Humidity: {currentWeather.main.humidity}%
                  </Typography>
                  <Typography variant="body2" component="div">
                    Wind: {currentWeather.wind.speed} km/h
                  </Typography>
                </CardContent>
              </Card>
            </Grid>  */
