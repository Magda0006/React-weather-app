import React, { useState } from "react";
import axios from "axios";
import WeatherC from "./WeatherC";
import WeatherInfoTop from "./WeatherInfoTop";
import WeatherInfoBottom from "./WeatherInfoBottom";

export default function WeatherF(props) {
  const [weather, setWeather] = useState({});
  const [unit, setUnit] = useState("imperial");

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      city: response.data.city,
      date: response.data.time,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      percived: response.data.temperature.feels_like,
      icon: response.data.condition.icon_url,
    });
  }

  function celcius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=2td2983oa81aa7bb308858f488f7ba0c&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);

  if (unit === "metric") {
    return <WeatherC city={city} />;
  } else {
    return (
      <div className="weather">
        <WeatherInfoTop weather={weather} />
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt={weather.description} />{" "}
            <span>
              {weather.temperature}{" "}
              <a href="/" onClick={celcius}>
                C°
              </a>{" "}
              | F°
            </span>
          </div>
          <WeatherInfoBottom weather={weather} />
        </div>
      </div>
    );
  }
}
