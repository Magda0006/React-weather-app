import React, { useState } from "react";
import WeatherInfoTop from "./WeatherInfoTop";
import WeatherInfoBottom from "./WeatherInfoBottom";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";
export default function DefaultData(props) {
  const [unit, setUnit] = useState("metric");
  const weather = props.weather;

  return (
    <div className="weather">
      <WeatherInfoTop weather={weather} />
      <div className="row">
        <div className="col-6">
          <img
            className="mainIcon"
            src={weather.icon}
            alt={weather.description}
          />{" "}
          <WeatherTemperature
            temperature={weather.temperature}
            unit={unit}
            setUnit={setUnit}
          />
        </div>
        <WeatherInfoBottom weather={weather} />
      </div>
    </div>
  );
}
