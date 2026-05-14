import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox() {

  const INIT_URL =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb";

  let info = {
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  };

  return (
    <div className="InfoBox">
      <h1>WeatherInfo - {info.weather}</h1>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={INIT_URL}
          title="weather"
        />

        <CardContent>

          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <p>Temperature= {info.temp}&deg;C</p>
            <p>Humidity= {info.humidity}</p>
            <p>Min Temp= {info.tempMin}&deg;C</p>
            <p>Max Tem= {info.tempMax}&deg;C</p>
            <p>The weather feels like = {info.feelsLike}&deg;C</p>
            <p>The weather can be described as <i>{info.weather} </i> and feels like {info.feelsLike}&deg;C</p>
          </Typography>

        </CardContent>

        
      </Card>
    </div>
  );
}