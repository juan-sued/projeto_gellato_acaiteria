import styled from 'styled-components';

export default function Footer({ children, title }) {
  return (
    <FooterStyle>
      <h2>{title}</h2>
      {children}
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  height: 78px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 0 24px;
  h2 {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: white;
  }
`;
