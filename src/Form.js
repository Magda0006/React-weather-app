import React, { useState } from "react";
import WeatherC from "./WeatherC";
import DefaultData from "./DefaultData";

export default function Form(props) {
  const [submited, setSubmited] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmited(true);
  }
  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (submited === true) {
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
        <WeatherC city={city} />
      </div>
    );
  } else {
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
        <DefaultData city={city} />
      </div>
    );
  }
}
