import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => setCity(e.target.value)} // le pasamos el valor del input ante un cambio en el searchbar
        value={city} // nos aseguramos de que los valores esten vinculados
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
