import React from "react";

import "./Weather.css";

export default function WeatherForecastDay(props) {
  console.log(props);
  let maxTemp = Math.round(props.forecast.temperature.maximum);
  let minTemp = Math.round(props.forecast.temperature.minimum);
  function day() {
    let date = new Date(props.forecast.time * 1000);
    let day = date.getDay();
    let days = ["Sat", "Sun", "Mon", "Tus", "Wed", "Thu", "Fri"];
    return days[day];
  }
  return (
    <div>
      <div>{day()}</div>
      <div>
        <img
          src={props.forecast.condition.icon_url}
          alt={props.condition}
          className="forecastIcon"
        />
      </div>
      <div>
        {minTemp}° <span>{maxTemp}°</span>
      </div>
    </div>
  );
}
