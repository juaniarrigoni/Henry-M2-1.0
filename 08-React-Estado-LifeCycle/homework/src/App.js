import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import About from "./components/About";

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
        .then((res) => res.json())
        .then((recurso) => {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        })
    );
  }
  function onClose(id) {
    setCities((oldCitis) => oldCitis.filter((c) => c.id !== id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}></Nav>
      <Cards cities={cities} onClose={onClose}></Cards>
    </div>
  );
}
