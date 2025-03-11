import React from "react";
import "./Weather.css";
export default function Weather() {
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
        <li>Tuesday 16:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly cloudy"
          />{" "}
          <span className="temperature">18</span>{" "}
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 71%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
