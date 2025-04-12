import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";

  const HOT_URL = "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vubnl8ZW58MHx8MHx8fDA%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1522043436628-a4bd7867030b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-4">
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
          title="Weather Image"
          className="rounded-t-lg"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-xl font-semibold text-gray-800 flex items-center space-x-2"
          >
            <span>{info.city}</span>
            {info.humidity > 80 ? (
              <ThunderstormIcon className="text-yellow-500" />
            ) : info.temp > 15 ? (
              <SunnyIcon className="text-yellow-500" />
            ) : (
              <AcUnitIcon className="text-blue-500" />
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="text-gray-600">
            Temperature = {info.temp}&deg;C
          </Typography>
          <Typography variant="body2" color="text.secondary" className="text-gray-600">
            Humidity = {info.humidity}%
          </Typography>
          <Typography variant="body2" color="text.secondary" className="text-gray-600">
            Min Temp = {info.tempMin}&deg;C
          </Typography>
          <Typography variant="body2" color="text.secondary" className="text-gray-600">
            Max Temp = {info.tempMax}&deg;C
          </Typography>
          <Typography variant="body2" color="text.secondary" className="text-gray-600">
            The Weather can be described as <i>{info.weather}</i> and feels like{" "}
            <i>{info.feelslike}</i>&deg;C
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
