import styled from 'styled-components';

export default function Background({
  children,
  backgroundColor,
  colorGradient,
  percentBackground,
  backgroundColorGrand
}) {
  return (
    <BackgroundStyle
      backgroundColor={backgroundColor}
      colorGradient={colorGradient}
      percentBackground={percentBackground}
      backgroundColorGrand={backgroundColorGrand}
    >
      {children}
    </BackgroundStyle>
  );
}
const BackgroundStyle = styled.main`
  background-color: ${props => props.colorGradient};
  background-image: linear-gradient(
    0deg,
    ${props => props.colorGradient} 0%,
    ${props => props.backgroundColor} ${props => props.percentBackground}%
  );

  padding: 0;
  margin: 0;
  position: absolute;
  min-height: 100%;
  width: 100%;

  @media screen and (min-width: 450px) {
    background-color: ${props => props.colorGradient};
    background-image: linear-gradient(
      0deg,
      ${props => props.colorGradient} 0%,
      ${props => props.backgroundColorGrand} ${props => props.percentBackground}%
    );
  }
`;
