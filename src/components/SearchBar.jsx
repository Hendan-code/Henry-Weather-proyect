import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return <div>
    <input type="text" placeholder='city'/>
    <button onClick= {() => onSearch ('Buscando...')}>Agregar</button>
  </div>
};

//Otra forma de realizar lo mismo ----> tomado del CR de Diego
// export default function SearchBar({onSearch}) {
//   // acá va tu código
//   function handleOnSearch () {
//     if (typeof onSearch === 'function') {
//       const input = document.getElementById ('search-bar-input');
//       onSearch(input.value);
//     }
//   }
//   return <div>
//     <input id='search-bar-input'/>
//     <button onClick= {handleOnSearch}>Agregar</button>
//   </div>
// };