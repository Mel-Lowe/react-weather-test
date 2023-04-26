import React from "react";

export default function Weatherinfo() {
  return (
    <div class="weatherInfo">
      <h1 id="currentCity">London, UK</h1>
      <div class="row">
        <div class="col-6">
          <div class="current-info">
            <ul>
              <li>
                <span id="current-date">Thursday 15:00</span>,
                <span id="current-description"> Overcast clouds</span>
              </li>
              <li>
                Humidity: <span id="humidity">75</span>%, Wind:{" "}
                <span id="wind">0.45</span>km/h
              </li>
            </ul>
          </div>
        </div>
        <div class="col-6">
          <div class="current-temp">
            <span>
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="Rainy cloud with sun behind"
                id="current-temp-icon"
              />
            </span>
            <span id="current-temp-integer">11</span>
            <span class="currentTempUnits">°C </span>
          </div>
        </div>
      </div>
    </div>
  );
}
