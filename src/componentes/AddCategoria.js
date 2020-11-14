import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategoria = ({ setCategorias }) => {
  const [info, setInfo] = useState("");

  const handleInputChange = (e) => {
    setInfo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.trim().length > 2) {
      setCategorias(cate => [info.trim(), ...cate])
    }

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
      </form>
    </>
  );
};

AddCategoria.propTypes = {
  setCategorias: PropTypes.func.isRequired
}



export default AddCategoria;
