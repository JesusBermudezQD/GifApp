import React, { useState } from "react";
import AddCategoria from "./componentes/AddCategoria";
import { GifGrid } from "./componentes/GifGrid";

const GiftExpertApp = () => {
  const [categorias, setCategorias] = useState([]);

  return (
    <div>
      <h2>GiftExpertApp</h2>
      <AddCategoria setCategorias={setCategorias} />
      <hr />
      <ul>
        {categorias.map((categoria) => {
          return <GifGrid categoria={categoria} key={categoria}/>;
        })}
      </ul>
    </div>
  );
};

export default GiftExpertApp;
