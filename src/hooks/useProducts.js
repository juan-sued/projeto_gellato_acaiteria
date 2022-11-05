import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosI from '../services/axios';

const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsAndCategories, setProductsAndCategories] = useState([]);

  useEffect(() => {
    axiosI
      .get(URL)
      .then(({ data }) => {
        setProductsAndCategories([...productsAndCategories, data]);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        productsAndCategories
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductsContext);
  return context;
};
