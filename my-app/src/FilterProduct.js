import React from 'react';
import { useProductContext } from './Context';
import "./Filter.css"

function FilterProduct() {
  const { state, dispatch } = useProductContext();

  const handleOptionChange = (event) => {
    dispatch({ type: 'SET_CATEGORY', payload: event.target.value });
  };
  const handleClearSelection = () => {
    dispatch({ type: 'SET_CATEGORY', payload: '' });
  };
  return (
    <div>
      <h3>Seleccionar Categoría</h3>
      <div className='CategorySelection'>
      <label>
        <input
          type="radio"
          name="options"
          value="electronics"
          checked={state.category === 'electronics'}
          onChange={handleOptionChange}
        />
        Electrónica
      </label>
      <label>
        <input
          type="radio"
          name="options"
          value="jewelery"
          checked={state.category === 'jewelery'}
          onChange={handleOptionChange}
        />
        Joyería
      </label>
      <label>
        <input
          type="radio"
          name="options"
          value="men's clothing"
          checked={state.category === "men's clothing"}
          onChange={handleOptionChange}
        />
        Ropa para hombre
      </label>
      <label>
        <input
          type="radio"
          name="options"
          value="women's clothing"
          checked={state.category === "women's clothing"}
          onChange={handleOptionChange}
        />
        Ropa para mujer
      </label>
      <button onClick={handleClearSelection}>Limpiar selección</button>
      </div>
    </div>
  );
}

export default FilterProduct;
