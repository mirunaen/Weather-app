import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "weather-icons/css/weather-icons.css";
import Weather from "../src/app_component/weather.component";

const API = "aae9fd5817293a02b244f3ba2b6456ca";
function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
