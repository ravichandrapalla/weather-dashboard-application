import React from "react";
import { Typography, Card, CardContent, Grid, Paper } from "@mui/material";
import { useLocation } from "react-router";
import CurrentWeather from "./../components/CurrentWeather";
import Forecast from "../components/Forecast";
const Traveler = ({ weatherData }) => {
  const location = useLocation();
  const { currentWeather, forecast, weatherLoading, foreCastLoading } =
    location.state || {};

  if (weatherLoading || foreCastLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CurrentWeather
        currentWeather={currentWeather}
        loading={weatherLoading}
      />
      <Forecast forecast={forecast} loading={foreCastLoading} />
      <Typography variant="h4" gutterBottom>
        Traveler's Weather Guide
      </Typography>
      <Paper elevation={3} style={{ padding: 16 }}>
        <Typography variant="h5" gutterBottom>
          Current Weather for Travel
        </Typography>
        <Typography variant="body1">
          {currentWeather.weather[0].description}
        </Typography>
      </Paper>

      <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
        <Typography variant="h5" gutterBottom>
          Travel Stories
        </Typography>
        <Typography variant="body1">
          "We avoided a storm thanks to the weather forecast, making our trip
          unforgettable."
        </Typography>
      </Paper>
    </div>
  );
};

export default Traveler;
