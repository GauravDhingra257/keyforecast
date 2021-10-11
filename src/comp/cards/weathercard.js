import React, { useState, useEffect } from "react";
import "../style.css";
import "../css/weather-icons.min.css";

const Weathercard = ({ weatherinfo }) => {
  const [iconmood, seticon] = useState("day-sunny");
  const [time, settime] = useState(new Date().toLocaleTimeString());
  setInterval(() => settime(new Date().toLocaleTimeString()), 1000);
  var {
    cityname,
    temp,
    pressure,
    humidity,
    country,
    sunrise,
    sunset,
    windspeed,
    mood,
    desc,
    wind_direction,
  } = weatherinfo;
  //to convert time from sec to local time string
  sunset = new Date(sunset * 1000).toLocaleTimeString();
  useEffect(() => {
    if (mood) {
      switch (mood) {
        case "Thunderstorm":
          seticon("wi-thunderstorm");
          break;
        case "Drizzle":
          seticon("wi-showers");
          break;
        case "Rain":
          seticon("wi-rain-mix");
          break;
        case "Snow":
          seticon("wi-snowflake-cold");
          break;
        case "Mist":
          seticon("wi-showers");
          break;
        case "Smoke":
          seticon("wi-smoke");
          break;
        case "Haze":
          seticon("wi-day-haze");
          break;
        case "Dust":
          seticon("wi-dust");
          break;
        case "Fog":
          seticon("wi-fog");
          break;
        case "Ash":
          seticon("wi-smog");
          break;
        case "Tornado":
          seticon("wi-tornado");
          break;
        case "Clear":
          seticon("wi-day-sunny");
          break;
        case "Clouds":
          seticon("wi-day-cloudy");
          break;
        default:
          seticon("wi-alien");
          break;
      }
    }
  }, [mood]);
  return (
    <div className="maincard container bg-light border rounded my-2">
      <div className="row">
        <div className="col-12 p-5 d-flex justify-content-center">
          <i style={{ fontSize: "8rem" }} className={`wi ${iconmood}`}></i>
        </div>
        <div
          className="
                col-12
                col-sm-8
                d-flex
                bg-dark
                align-items-center
                justify-content-around
              "
        >
          <h1 className="text-white">
            <i style={{ color: "#fff" }} className="wi wi-thermometer"></i>{" "}
            {temp}°C
          </h1>
          <div>
            <h4 className="text-white px-1 m-0">{mood}</h4>
            <p className="text-secondary px-1 m-0">{desc}</p>
            <h4 className="text-secondary px-1 mb-1">{`${cityname},${country}`}</h4>
          </div>
        </div>
        <div
          className="
                col-12
                col-sm-4
                bg-secondary
                d-flex
                align-items-center
                justify-content-center
              "
        >
          <div>
            <h4 className="text">{new Date().toLocaleDateString()}</h4>
            <h4 className="text">{time}</h4>
          </div>
        </div>

        <div className="col-6 col-lg-3 d-flex align-items-center info">
          <i className="wi wi-sunset px-2"></i>
          <div className="d-flex flex-column justify-content-center">
            <h4 className="text">{sunset}</h4>
            <h4 className="text-secondary">Sunset</h4>
          </div>
        </div>
        <div className="col-6 col-lg-3 d-flex align-items-center info ">
          <i className="wi wi-humidity px-2"></i>
          <div className="d-flex flex-column justify-content-center">
            <h4 className="text">{humidity} %</h4>
            <h4 className="text-secondary">Humidity</h4>
          </div>
        </div>
        <div className="col-6 col-lg-3 d-flex align-items-center info ">
          <i className="wi wi-barometer px-2 mx-2"></i>
          <div className="d-flex flex-column justify-content-center">
            <h4 className="text">{pressure} millibars</h4>
            <h4 className="text-secondary">Pressure</h4>
          </div>
        </div>
        <div className="col-6 col-lg-3 d-flex align-items-center info ">
          <i className="wi wi-wind-beaufort-1 px-2"></i>
          <div className="d-flex flex-column justify-content-center">
            <h4 className="text">
              {(windspeed * 3.6).toFixed(1)} kmh{" "}
              <span
                style={{
                  fontWeight: "bold",
                  display: "inline-block",
                  transform: `rotate(${wind_direction}deg)`,
                }}
              >
                &uarr;
              </span>
            </h4>
            <h4 className="text-secondary">Wind</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weathercard;
