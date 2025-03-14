import React from "react";

export default function WeatherInfoBottom(props) {
  let weather = props.weather;
  return (
    <div className="col-6">
      <ul>
        <li>Humidity: {weather.humidity}%</li>
        <li>Wind: {weather.wind} km/h</li>
      </ul>
    </div>
  );
}
