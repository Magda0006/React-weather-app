import React from "react";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function WeatherInfoTop(props) {
  let weather = props.weather;
  let date = new Date(weather.date * 1000);
  return (
    <div>
      <h1 className="text-capitalize">{weather.city}</h1>
      <ul>
        <li>
          <FormattedDate date={date} />
        </li>
        <li className="text-capitalize">{weather.description}</li>
      </ul>
    </div>
  );
}
