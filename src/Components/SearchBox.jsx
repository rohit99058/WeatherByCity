import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1cb57aef684f148d8567fc071d25ff5b";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="w-full max-w-md p-6 bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl border border-gray-200 transition-transform hover:scale-105 hover:shadow-3xl">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          className="w-full bg-white rounded-lg"
        />
        <Button
          type="submit"
          variant="contained"
          className="!bg-gradient-to-r !from-blue-500 !to-indigo-600 !text-white !font-semibold !py-2 !rounded-lg !shadow-md hover:!shadow-xl transition-all duration-300"
        >
          Search
        </Button>
        {error && (
          <p className="text-red-600 text-sm mt-2 text-center font-medium">
            No such place exists
          </p>
        )}
      </form>
    </div>
  );
}
