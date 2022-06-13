import React from "react";

export default function Card(name, min, max, img, onClose) {
  // acá va tu código

  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h3>{props.name}</h3>
      <p>Min</p>
      <p>{props.min}</p>
      <p>Max</p>
      <p>{props.max}</p>
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="img not found"
      ></img>
    </div>
  );
}
