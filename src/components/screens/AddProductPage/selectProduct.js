import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useProduct } from '../../../hooks/useProducts';
export default function SelectProduct({
  setSelectedProduct,
  selectedProduct,
  selectedCategory
}) {
  const { productsAndCategories } = useProduct();

  const [productsForCategories, setProductsForCategories] = useState([]);

  useEffect(() => {
    console.log('id:', selectedCategory);
    if (selectedCategory > 1) {
      console.log('id:', selectedCategory);
      console.log('productsAndCategories', productsAndCategories);
      console.log(
        'productsAndCategories.productsList',
        productsAndCategories.productsList
      );
      const productsByIdCategory = productsAndCategories.productsList.filter(
        product => product.categoryId == selectedCategory
      );
      console.log('productsByIdCategory', productsByIdCategory);
      setProductsForCategories(productsByIdCategory);
    }
  }, [selectedCategory]);

  return (
    <SelectProductStyle>
      <label htmlFor="products">Nome do produto: </label>
      <select
        value={selectedProduct}
        onChange={e => setSelectedProduct(e.target.value)}
        name="products"
      >
        {productsForCategories.length > 0 ? (
          productsForCategories.map((product, index) => (
            <option key={index} value={product.name}>
              {product.name}
            </option>
          ))
        ) : (
          <option>{'Escolha uma categoria'}</option>
        )}
      </select>
    </SelectProductStyle>
  );
}

const SelectProductStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  select {
    background-color: #ffffff;
    border-radius: 5px 5px 0 0;
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: 20px;
    height: 45px;
    min-width: 150px;
    width: 100%;
    border: none;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    margin-top: 5px;
  }
`;
