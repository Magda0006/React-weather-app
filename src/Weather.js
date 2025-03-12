import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});

  function handleResponse(response) {
    setReady(true);
    console.log(response.data);
    setWeather({
      city: response.data.city,
      date: response.data.time,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      percived: response.data.temperature.feels_like,
      icon: response.data.condition.icon_url,
    });
  }
  function search() {
    let key = "2td2983oa81aa7bb308858f488f7ba0c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
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
        <WeatherInfo info={weather} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
