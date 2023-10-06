import React, { createContext, useContext, useReducer } from 'react';

const ProductContext = createContext();

const initialState = {
  category: '', 
  products: [],
}

const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext debe ser utilizado dentro de un ProductProvider');
  }
  return context;
};

export { ProductProvider, useProductContext };
