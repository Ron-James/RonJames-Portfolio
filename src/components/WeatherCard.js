import React, { Component } from "react";
import "../styles/WeatherCard.css";
import sun from "../Icons/sun.png";
import dayCloudy from "../Icons/day_cloudy.png";
import dayDrizzle from "../Icons/drizzle_day.png";
import nightDrizzle from "../Icons/drizzle_night.png";
import nightCloudy from "../Icons/night_cloudy.png";
import night from "../Icons/night.png";
import rainy from "../Icons/rainy.png";
import dayStorm from "../Icons/storm_day.png";
import nightStorm from "../Icons/storm_night.png";

//this code does not function as desired
//it is not included on the website but I do not want to delete it so please ignore it for the sake of marking
//This was just for testing purposes as I could not get it to work in the end

const weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?id=993800&units=metric&appid=53217561e22fa44ddb8df2b800ca3a59";
const timeUrl = "https://worldtimeapi.org/api/timezone/Africa/Johannesburg";

let sunrise = 0;
let sunset = 0;
let hum = 0;
let temp = 0;
let tempMin = 0;
let tempMax = 0;
let desc = "";
let time = 0;
let cond = "";
let strTime = "19:20";

function FetchWeatherData() {
  fetch(weatherUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log("failure");
      }
    })
    .then((data) => {
      //currTemp.innerHTML = Math.round(data.main.temp).toString() + "&deg;";
      temp = Math.round(data.main.temp);
      desc = data.weather[0].description;
      cond = data.weather[0].main;
      tempMin = Math.round(data.main.temp_min);
      tempMax = Math.round(data.main.temp_max);
      hum = Math.round(data.main.humidity);
      //console.log(temp);
      sunrise = data.sys.sunrise;
      sunset = data.sys.sunset;
      console.log(strTime + " time");

      SetIcon(cond);
    });
}

function ConvertTime(unix) {
  var date = new Date(unix * 1000);
  var hours = date.getHours();
  var mins = date.getMinutes();
  if (mins > 9) {
    var str = hours.toString() + ":" + mins.toString();
    return str;
  } else {
    var str = hours.toString() + ":0" + mins.toString();
    return str;
  }
}

function FetchTimeData() {
  fetch(timeUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log("failure");
      }
    })
    .then((data) => {
      var timeData = data;
      time = data.unixtime;
      strTime = ConvertTime(data.unixtime);

      FetchWeatherData();
      //UpdateTimeModule(time);
      //SetIcon(cond);
    });
}

function SetIcon(condition) {
  var weatherCard = document.getElementById("weatherCard");
  var icon = document.getElementById("weatherIcon");
  var night = false;
  if ((time > sunrise) & (time < sunset)) {
    night = false;
    weatherCard.style.background = "var(--background-grad-day)";
  } else if (time >= sunset) {
    night = true;
    weatherCard.style.background = "var(--background-grad-night)";
  }

  switch (condition) {
    case "Thunderstorm":
      if (night == true) {
        icon.src = nightStorm;
        console.log(icon.src);
      } else {
        icon.src = dayStorm;
        console.log(icon.src);
      }
      break;
    case "Drizzle":
      if (night == true) {
        icon.src = nightDrizzle;
        console.log(icon.src);
      } else {
        icon.src = dayDrizzle;
        console.log(icon.src);
      }
      break;
    case "Clouds":
      if (night == true) {
        icon.src = nightCloudy;
        console.log(icon.src);
      } else {
        icon.src = dayCloudy;
        console.log(icon.src);
      }
      break;
    case "Clear":
      if (night == true) {
        icon.src = night;
        console.log(icon.src);
      } else {
        icon.src = sun;
        console.log(icon.src);
      }
      break;
    case "Rain":
      icon.src = rainy;
      console.log(icon.src);
      break;
    default:
      if (night == true) {
        icon.src = night;
        console.log(icon.src);
      } else {
        icon.src = sun;
        console.log(icon.src);
      }
      break;
  }
}
export default class WeatherCard extends Component {
  render() {
    FetchTimeData();
    return (
      <div>
        <section className="weather" id="weatherCard">
          <section className="sky">
            <div className="cloud-1"></div>
            <div className="cloud-2"></div>
            <div className="cloud-3"></div>
            <div className="icon">
              <img src={sun} id="weatherIcon" />
            </div>
          </section>
          <section className="content">
            <h1 id="temp">{temp}&deg;</h1>
            <h3 id="desc">{cond}</h3>

            <div className="weatherDetails">
              <div>
                <p className="value" id="minTemp">
                  {tempMin} &deg;
                </p>
                <p className="label">Minimum</p>
              </div>
              <div>
                <p className="value" id="maxTemp">
                  {tempMax}&deg;
                </p>
                <p className="label">Maximum</p>
              </div>
              <div>
                <p className="value" id="time">
                  {strTime}
                </p>
                <p className="label">Current Time</p>
              </div>
              <div>
                <p className="value" id="hum">
                  {hum}%
                </p>
                <p className="label">Humidity</p>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
