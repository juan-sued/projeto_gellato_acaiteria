import styled from 'styled-components';

export default function TitlePage({ children }) {
  return <TitlePageStyle>{children}</TitlePageStyle>;
}
const TitlePageStyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin-top: 50px;
`;

// coloca o elemento no centro da página
