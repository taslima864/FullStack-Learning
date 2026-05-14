import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb";

  const HOT_URL =
    "https://media.istockphoto.com/id/2257113639/photo/busy-delhi-street-traffic-in-old-city.jpg?s=1024x1024&w=is&k=20&c=3gGGHojj28PTOqCKUuYMobwEo9SyU6b3yirR0fEzvxI="; // sunny / hot

  const COLD_URL =
    "https://images.unsplash.com/photo-1644803188798-f87b4e482452?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1576514864427-f0809d2b66eb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // cold / snow

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
            }
            title="weather"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature= {info.temp}&deg;C</p>
              <p>Humidity= {info.humidity}</p>
              <p>Min Temp= {info.tempMin}&deg;C</p>
              <p>Max Temp= {info.tempMax}&deg;C</p>
              <p>The weather feels like = {info.feelsLike}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather} </i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
