import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/";
  const API_KEY = import.meta.env.VITE_API_KEY; // ✅ secure

  let getWeatherInfo = async (city) => {
    try {
      let response = await fetch(
        `${API_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;

    } catch (err) {
      throw err; // ✅ important
    }
  };

  let handlechange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      let newInfo = await getWeatherInfo(city);

      updateInfo(newInfo); // ✅ only runs if success
      setError(false);     // reset error
      setCity("");

    } catch (err) {
      setError(true);      // show error
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handlechange}
        />

        <br /><br />

        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && (
          <p style={{ color: "red" }}>
            No such place exists!
          </p>
        )}
      </form>
    </div>
  );
}