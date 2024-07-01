import React from "react";
import { Typography, Card, CardContent, Grid, Paper } from "@mui/material";
import { useLocation } from "react-router";
import CurrentWeather from "./../components/CurrentWeather";
import Forecast from "../components/Forecast";
const Farmer = () => {
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
      <Typography variant="h4" gutterBottom style={{ padding: 16 }}>
        Farming Prediction
      </Typography>
      <Paper elevation={3} style={{ padding: 16 }}>
        <Typography variant="h5" gutterBottom>
          Current Weather for Farming
        </Typography>
        <Typography variant="body1">
          {currentWeather.weather[0].description}
        </Typography>
      </Paper>
      <Grid container spacing={2}>
        {forecast.length > 0 &&
          forecast.slice(0, 5).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    {new Date(item.dt * 1000).toLocaleTimeString()}
                  </Typography>
                  <Typography variant="body2">
                    {item.weather[0].description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
        <Typography variant="h5" gutterBottom>
          Farmer Stories
        </Typography>
        <Typography variant="body1">
          "Thanks to the weather updates, I was able to save my crops from
          unexpected frost."
        </Typography>
      </Paper>
    </div>
  );
};

export default Farmer;
