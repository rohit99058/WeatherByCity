import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo((prevInfo) => ({
      ...prevInfo,
      ...newInfo,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-300 flex flex-col items-center py-10 px-4">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 drop-shadow-lg mb-8 tracking-wide animate-pulse">
        Weather App For Real Time Data
      </h2>
      <SearchBox updateInfo={updateInfo} />
      <br />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
