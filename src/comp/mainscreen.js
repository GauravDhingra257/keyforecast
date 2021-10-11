import React, { useState, useEffect } from "react";
import "./style.css";
import "./css/weather-icons.min.css";
import Weathercard from "./cards/weathercard";
import loadingicon from "./image/loadingicon.gif";

const Wtapp = () => {
  const [isLoading, setLoading] = useState(false);
  //store weather data as object
  const [weatherinfo, setweatherinfo] = useState({});
  //store user input area
  const [searchval, setsearch] = useState("noida");
  //fetching data from api
  const getweatherinfo = async () => {
    setLoading(true);
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchval}&units=metric&appid=218eeb326c8318bd26b235d0cb142583`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const { temp, pressure, humidity } = data.main;
      const { speed: windspeed, deg: wind_direction } = data.wind;
      const { country, sunrise, sunset } = data.sys;
      const { name: cityname } = data;
      const { main: mood, description: desc } = data.weather[0];
      const myweather = {
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
      };
      setweatherinfo(myweather);
      console.log(myweather);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getweatherinfo();
  }, []);
  return (
    <>
      <section
        className="
        mainsec
          bg-dark
          d-flex
          flex-column
          align-items-center
          justify-content-center
        "
      >
        {/* searchbox start */}
        <div className="Hotbg my-2">
          <input
            type="text"
            name=""
            className="Hotbg-txt"
            placeholder="Search >>>"
            value={searchval}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.code === "Enter") {
                getweatherinfo();
              }
            }}
          />
          <button href="#" className="Hotbg-btn" onClick={getweatherinfo}>
            Search
          </button>
        </div>
        {isLoading ? (
          <div>
            <img
              src={loadingicon}
              className="image-fluid pb-1"
              style={{ height: "64px" }}
            />
            <p className="text-white">loading...</p>
          </div>
        ) : (
          ""
        )}
        {/* searchbox end */}
        <Weathercard weatherinfo={weatherinfo} />
      </section>
    </>
  );
};

export default Wtapp;
