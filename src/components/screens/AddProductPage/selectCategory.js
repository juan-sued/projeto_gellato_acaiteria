import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useProduct } from '../../../hooks/useProducts';

export default function SelectCategory({ setSelectedCategory, selectedCategory }) {
  const { productsAndCategories } = useProduct();

  const URL = 'http://localhost:5000/products';

  return (
    <SelectCategoryStyle>
      <label htmlFor="categories">Escolha uma categoria: </label>
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
        name="categories"
      >
        {productsAndCategories !== null && productsAndCategories.length > 0
          ? productsAndCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))
          : ''}
      </select>
    </SelectCategoryStyle>
  );
}

const SelectCategoryStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  margin-right: 10px;

  select {
    background-color: #ffffff;
    border-radius: 5px 5px 0 0;
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: 20px;
    height: 45px;
    min-width: 150px;
    width: 100%;

    margin-top: 5px;
  }
`;
