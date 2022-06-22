import React from "react";
import s from "./Card.module.css";

export default function Card({ name, min, max, onClose, img }) {
  // acá va tu código

  return (
    <div class={s.container}>
      <button onClick={onClose} class={s.btnClose}>
        X
      </button>
      <h3>{name}</h3>
      <div className={s.grid}>
        <div>
          <p>Min</p>
        </div>
        <div>
          <p>{min}</p>
          <p>Max</p>
        </div>
        <p>{max}</p>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="img not found"
        ></img>
      </div>
    </div>
  );
}
