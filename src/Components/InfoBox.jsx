import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60";
  const COLD_URL =
    "https://images.unsplash.com/photo-1522043436628-a4bd7867030b?w=600&auto=format&fit=crop&q=60";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format";

  return (
    <div className="max-w-sm w-full bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden border border-gray-200 transition hover:scale-105 hover:shadow-3xl">
      <Card className="!shadow-none !bg-transparent">
        <CardMedia
          sx={{ height: 200 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title="Weather Image"
          className="rounded-t-2xl object-cover"
        />
        <CardContent className="space-y-3">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-2xl font-bold text-gray-800 flex items-center justify-between"
          >
            <span>{info.city}</span>
            {info.humidity > 80 ? (
              <ThunderstormIcon className="text-yellow-500 text-3xl animate-pulse" />
            ) : info.temp > 15 ? (
              <SunnyIcon className="text-yellow-500 text-3xl animate-bounce" />
            ) : (
              <AcUnitIcon className="text-blue-500 text-3xl animate-spin-slow" />
            )}
          </Typography>

          <Typography variant="body2" className="text-gray-700 font-medium">
            🌡 Temperature: <span className="font-semibold">{info.temp}°C</span>
          </Typography>
          <Typography variant="body2" className="text-gray-700 font-medium">
            💧 Humidity: <span className="font-semibold">{info.humidity}%</span>
          </Typography>
          <Typography variant="body2" className="text-gray-700 font-medium">
            🔻 Min Temp: {info.tempMin}°C
          </Typography>
          <Typography variant="body2" className="text-gray-700 font-medium">
            🔺 Max Temp: {info.tempMax}°C
          </Typography>
          <Typography variant="body2" className="text-gray-700 font-medium italic">
            {`Weather: ${info.weather}, feels like ${info.feelslike}°C`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
