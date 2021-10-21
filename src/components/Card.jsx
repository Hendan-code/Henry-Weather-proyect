import React from "react";
import Temperature from "./CardTemp";

export default function Card({ min, max, name, img, onClose }) {
  // acá va tu código
  //Verifico si onClose es una función para que no se rompa el código
  function handleOnClose() {
    if (typeof onClose === "function") onClose();
  }

  return (
    <div>
      {/* Se pudo haber pasado directamente onClose como props */}
      <button onClick={handleOnClose}>X</button>
      <h2>{name}</h2>
      <Temperature labelTemp="Min" value={min} />
      <Temperature labelTemp="Max" value={max} />
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="Imagen"
      />
    </div>
  );
}