import { useState } from 'react';
import styled from 'styled-components';
import CardProduct from './CardProduct';

export default function ListCard({ responseProducts }) {
  return (
    <ListCardStyle>
      {responseProducts.map((product, index) => (
        <CardProduct key={index} link={product.image} name={product.name} />
      ))}
    </ListCardStyle>
  );
}

const ListCardStyle = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
`;
