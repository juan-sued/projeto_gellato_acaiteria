import styled from 'styled-components';
import arrowright from '../../assets/arrowright.svg';
import arrowrigthwhite from '../../assets/arrowrigthwhite.svg';
export default function TitleAndArrow({
  titleSession,
  color = '#1e0c22c2',
  fontSize = '30px',
  fontWeight,
  colorLine = '#8e1c5ae5'
}) {
  console.log(color);
  return (
    <TitleAndArrowContainer
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      colorLine={colorLine}
    >
      <div className="titleContainer">
        <h2>{titleSession}</h2>
        <div className="line"></div>
      </div>
      <img src={color === '#1e0c22c2' ? arrowright : arrowrigthwhite} alt="" />
    </TitleAndArrowContainer>
  );
}

const TitleAndArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  min-width: 100%;

  margin-left: -5px;

  .titleContainer {
    h2 {
      padding-left: 30px;
      font-size: ${props => props.fontSize};
      color: ${props => props.color};
      font-weight: ${props => props.fontWeight};
    }
    .line {
      background-color: ${props => props.colorLine};
      height: 1px;
      width: 103%;
      max-width: 210px;
      position: relative;
      bottom: ${props => (props.fontSize === '30px' ? '8px' : '13px')};
      left: 0;

      @media screen and (min-width: 700px) {
        max-width: 500px;
      }
    }
  }

  img {
    width: ${props => props.fontSize};
  }
`;
