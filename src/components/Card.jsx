import React from "react";
import CardTemp from "./CardTemp";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  //Para ejecutar onClose asegurandome que sea una funcion
  //Con esto me aseguro de mandar otro tipo de dato
  function handleOnClose() {
    if (typeof onClose === "function") onClose();
  }
  //Vamos a construir la card pensando en todos los componentes que son parte de la card
  return (
    <div>
      <button onClick={handleOnClose}>X</button>
      <span>{name}</span>
      <CardTemp label= 'Min' value= {min}/>
      <CardTemp label= 'Max' value= {max}/>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono del clima" />
    </div>
  );
}
