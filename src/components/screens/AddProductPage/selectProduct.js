import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
export default function SelectProduct({
  setSelectedProduct,
  selectedProduct,
  selectedCategory
}) {
  const [produtosForCategories, setProdutosForCategories] = useState(null);
  console.log(selectedProduct);
  const URL = `http://localhost:5000/products/${selectedCategory}`;

  useEffect(() => {
    const promise = axios.get(URL);
    promise.then(response => {
      setProdutosForCategories(response.data);
      console.log(response.data, 'aqui aaa');
    });
    promise.catch(() => {
      console.log('err ao pegar produtos');
    });
  }, [selectedCategory]);

  return (
    <SelectProductStyle>
      <label htmlFor="products">Nome do produto: </label>
      <select
        value={selectedProduct}
        onChange={e => setSelectedProduct(e.target.value)}
        name="products"
      >
        {produtosForCategories !== null && produtosForCategories.length > 0
          ? produtosForCategories.map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            ))
          : ''}
      </select>
    </SelectProductStyle>
  );
}

const SelectProductStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

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
