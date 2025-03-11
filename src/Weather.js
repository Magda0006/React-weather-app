import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});

  if (ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-sm-9 ">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control w-100"
                autoFocus="on"
              />
            </div>
            <div className="col-sm-3 ">
              <input type="submit" className="btn btn-primary ms-2 w-100" />
            </div>
          </div>{" "}
        </form>
        <h1>Rome</h1>
        <ul>
          <li>
            <FormattedDate date={weather.date} />
          </li>
          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt={weather.description} />{" "}
            <span className="temperature">
              {Math.round(weather.temperature)}
            </span>{" "}
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
  } else {
    let city = `rome`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=2td2983oa81aa7bb308858f488f7ba0c`;
    axios.get(apiUrl).then(handleResponse);
    function handleResponse(response) {
      setReady(true);

      setWeather({
        city: response.data.city,
        date: new Date(response.data.time * 100),
        temperature: response.data.temperature.current,
        description: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        percived: response.data.temperature.feels_like,
        icon: response.data.condition.icon_url,
      });
    }
  }
}
