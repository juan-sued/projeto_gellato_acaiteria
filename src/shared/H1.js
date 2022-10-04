import styled from 'styled-components';

export default function H1({ children }) {
  return <H1Style>{children}</H1Style>;
}

const H1Style = styled.h1`
  font-weight: 200;
  color: #16112b;
  font-size: 40px;
  @media (max-width: 800px) {
    font-size: 25px;
  }
`;
