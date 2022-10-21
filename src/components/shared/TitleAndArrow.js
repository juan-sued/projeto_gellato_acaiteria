import styled from 'styled-components';
import arrowright from '../../assets/arrowright.svg';

export default function TitleAndArrow({ titleSession }) {
  return (
    <TitleAndArrowContainer>
      <div className="titleContainer">
        <h2>{titleSession}</h2>
        <div className="line"></div>
      </div>
      <img src={arrowright} alt="" />
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
      padding-left: 20px;
      font-size: 30px;
      color: #1e0c22c2;
    }
    .line {
      background-color: #8e1c5ae5;
      height: 1px;
      width: 102%;
      position: relative;
      bottom: 8px;
      left: 0;
    }
  }
`;
