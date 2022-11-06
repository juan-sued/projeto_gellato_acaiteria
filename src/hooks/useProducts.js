import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosI from '../services/axios';

const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productsAndCategories, setProductsAndCategories] = useState({
    productsList: [
      {
        name: 'açaí',
        price: '2,50',
        image: 'https://asdasdasdasdasd',
        categoryId: 1
      }
    ]
  });

  useEffect(() => {
    axiosI
      .get('/products')
      .then(({ data }) => {
        setProductsAndCategories([...productsAndCategories, data]);
      })
      .catch(err => {
        const testArr = {
          categoriesList: [
            { id: 2, name: 'adicionais' },
            { id: 3, name: 'sabores de açaí' },
            { id: 4, name: 'caldas' }
          ],
          productsList: [
            {
              name: 'açaí',
              price: '2,50',
              image: 'https://asdasdasdasdasd',
              categoryId: 1
            },
            {
              name: 'açaí',
              price: '2,50',
              image: 'https://asdasdasdasdasd',
              categoryId: 2
            },
            {
              name: 'açaí',
              price: '2,50',
              image: 'https://asdasdasdasdasd',
              categoryId: 3
            },
            {
              name: 'açaí',
              price: '2,50',
              image: 'https://asdasdasdasdasd',
              categoryId: 4
            }
          ]
        };

        setProductsAndCategories(testArr);

        console.error(err);
      });
  }, []);
  console.log(productsAndCategories);
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
