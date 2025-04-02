import React from "react";

import "./Weather.css";

export default function WeatherTemperature(props) {
  function changeToFahrenheit(event) {
    event.preventDefault();
    props.setUnit("imperial");
  }
  function changeToCelsius(event) {
    event.preventDefault();
    props.setUnit("metric");
  }
  function getFahrenheitTemperature() {
    let fahrenheitTemperature = Math.round((props.temperature * 9) / 5 + 32);
    return fahrenheitTemperature;
  }

  if (props.unit === "metric") {
    return (
      <span>
        {props.temperature} C° |{" "}
        <a href="/" onClick={changeToFahrenheit}>
          F°
        </a>
      </span>
    );
  } else {
    return (
      <span>
        {getFahrenheitTemperature()}{" "}
        <a href="/" onClick={changeToCelsius}>
          C°{" "}
        </a>
        | F°
      </span>
    );
  }
}
