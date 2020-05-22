import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "weather-icons/css/weather-icons.css";
import Weather from "../src/app_component/weather.component";
//api call api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key = "aae9fd5817293a02b244f3ba2b6456ca";

class App extends React.Comment {
  constructor() {
    super();
    this.state = {};
    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`
    );
    const response = await api_call.json();
    console.log(response);
  };
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
