import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="weather p-3">
      <form className="weather-search">
        <input type="search" placeholder="Enter a city.." />
        <input type="submit" className="btn btn-primary ms-2" />
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
          18 C°
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
