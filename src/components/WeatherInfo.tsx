import { FC } from "react";
import Api from '../apiType';

type props = {
  weather: Api | undefined
}

const WeatherInfo: FC<props> = ({ weather }) =>
{
  return (
    <div className="weather-data">
      <div className="body flex">
        <h1>{String(weather?.main.temp && Math.round(weather?.main.temp - 273))}°C</h1>
        <p>{weather?.weather[0].description}</p>
      </div>
      <div className="footer flex">
        <div className="humidity">
          <p>Humidity</p>
          <p>{String(weather?.main.humidity)}%</p>
        </div>
        <div className="velocity">
          <p>Velocity</p>
          <p>{String(weather?.wind.speed)}m/s</p>
        </div>
        <div className="pressure">
          <p>Pressure</p>
          <p>{String(weather?.main.pressure)}hPa</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo;
