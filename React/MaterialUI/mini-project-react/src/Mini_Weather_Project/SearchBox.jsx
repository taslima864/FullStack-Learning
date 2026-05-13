import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox() {
  let [city, setCity] = useState("");
  const API_URL = "http://api.openweathermap.org/data/2.5/";
  const API_KEY = "611ba347c0538ee113b002f058a34ca5";

  let getWeatherInfo = async (city) => {
    try {
      let response = await fetch(
        `${API_URL}weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data. Please try again.");
    }
  };

  let handlechange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    getWeatherInfo(city);
    setCity("");
  };

  return (
    <>
      <div className="SearchBox">
        <h3>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handlechange}
          />
          <br />
          <br />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
      </div>
    </>
  );
}
