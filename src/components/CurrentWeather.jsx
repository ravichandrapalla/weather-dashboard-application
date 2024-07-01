import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Grid, Paper } from "@mui/material";
import moment from "moment";

export default function CurrentWeather({ currentWeather, loading }) {
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
