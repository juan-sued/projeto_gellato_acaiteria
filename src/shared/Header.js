import styled from 'styled-components';

export default function Header({ children }) {
  return <HeaderStyle>{children}</HeaderStyle>;
}

const HeaderStyle = styled.header`
  height: 78px;
  width: 100%;

  h2 {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: white;
  }
`;
