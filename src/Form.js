import React, { useState } from "react";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";
import WeatherInfoTop from "./WeatherInfoTop";
import WeatherInfoBottom from "./WeatherInfoBottom";
import DefaultData from "./DefaultData";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast.js";

export default function Form(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("metric");
  const [weather, setWeather] = useState({ submitted: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      submitted: true,
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

  function getCity() {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=2td2983oa81aa7bb308858f488f7ba0c&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getCity();
  }

  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (weather.submitted === true) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-9 ">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control w-100"
                autoFocus="on"
                onChange={handleCity}
              />
            </div>
            <div className="col-sm-3">
              <input type="submit" className="btn btn-primary ms-2 w-100" />
            </div>
          </div>
        </form>
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
          <WeatherForecast city={city} />
        </div>
      </div>
    );
  } else {
    getCity();
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-9 ">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control w-100"
                autoFocus="on"
                onChange={handleCity}
              />
            </div>
            <div className="col-sm-3">
              <input type="submit" className="btn btn-primary ms-2 w-100" />
            </div>
          </div>
        </form>
        <DefaultData weather={weather} unit={unit} setUnit={setUnit} />
      </div>
    );
  }
}
