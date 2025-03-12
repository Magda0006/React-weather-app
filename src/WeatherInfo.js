import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  let weather = props.info;
  let date = new Date(weather.date * 100);
  return (
    <div>
      <h1 className="text-capitalize">{weather.city}</h1>
      <ul>
        <li>
          <FormattedDate date={date} />
        </li>
        <li className="text-capitalize">{weather.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={weather.icon} alt={weather.description} />{" "}
          <span className="temperature">{Math.round(weather.temperature)}</span>{" "}
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(weather.percived)} C°</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
