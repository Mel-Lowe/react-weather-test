import React from "react";

export default function Forecast() {
  return (
    <div className="weatherForecast" id="weather-forecast">
      <div className="row">
        <div className="col-2 weather-forecast-tile">
          <div className="weather-forecast-date">Fri</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50"
            alt=""
          />
          <div className="weather-forecast-temp">
            <span id="forecast-temp-max">11°</span> <span>|</span>{" "}
            <span id="forecast-temp-min">9°</span>
          </div>
        </div>
        <div className="col-2 weather-forecast-tile">
          <div className="weather-forecast-date">Sat</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50"
            alt=""
          />
          <div className="weather-forecast-temp">
            <span id="forecast-temp-max">12°</span> <span>|</span>{" "}
            <span id="forecast-temp-min">8°</span>
          </div>
        </div>
        <div className="col-2 weather-forecast-tile">
          <div className="weather-forecast-date">Sun</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            width="50"
            alt=""
          />
          <div className="weather-forecast-temp">
            <span id="forecast-temp-max">11°</span> <span>|</span>{" "}
            <span id="forecast-temp-min">7°</span>
          </div>
        </div>
        <div className="col-2 weather-forecast-tile">
          <div className="weather-forecast-date">Mon</div>
          <img
            src="https://openweathermap.org/img/wn/03d@2x.png"
            width="50"
            alt=""
          />
          <div className="weather-forecast-temp">
            <span id="forecast-temp-max">13°</span> <span>|</span>{" "}
            <span id="forecast-temp-min">6°</span>
          </div>
        </div>
        <div className="col-2 weather-forecast-tile">
          <div className="weather-forecast-date">Tues</div>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            width="50"
            alt=""
          />
          <div className="weather-forecast-temp">
            <span id="forecast-temp-max">13°</span> <span>|</span>{" "}
            <span id="forecast-temp-min">5°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
