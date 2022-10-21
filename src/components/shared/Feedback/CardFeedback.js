import styled from 'styled-components';
import iconprofile from '../../../assets/iconprofile.svg';
import iconstart from '../../../assets/iconstart.svg';
export default function CardFeedback() {
  return (
    <CardFeedbackStyle>
      <div className="columnIcon">
        <div className="iconBackground">
          <img src={iconprofile} alt="" />
        </div>
      </div>
      <div className="columnContent">
        <h1>Mariana</h1>
        <span className="lineDetailsFeedback">
          <p className="points">5,0</p>
          <img src={iconstart} alt="" />
          <img src={iconstart} alt="" />
          <img src={iconstart} alt="" />
          <img src={iconstart} alt="" />
          <img src={iconstart} alt="" />
          <p className="date">12/01/2022</p>
        </span>
        <div className="feedback">Muito legal muito bom mesmo!!!!! Recomendo!!</div>
      </div>
    </CardFeedbackStyle>
  );
}

const CardFeedbackStyle = styled.div`
  background-color: white;

  padding: 15px;
  border-radius: 8px;
  display: flex;
  max-width: 100%;
  padding: 15px 10px 15px 10px;
  font-weight: 500;
  margin-bottom: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);

  .feedback {
    width: 275px;
    word-wrap: break-word;
    line-height: 21px;
    font-weight: 500;
    font-size: 17px;
  }

  .lineDetailsFeedback {
    display: flex;
    justify-content: flex-start;

    display: flex;
    margin-bottom: 10px;
    align-items: center;

    height: 20px;

    .points {
      font-weight: 700;
      margin-right: 8px;
    }
    .date {
      color: #b0b0b0;
      margin-left: 8px;
    }

    img {
      width: 14px;
      height: 14px;
      margin-right: 1px;
      margin-bottom: 4px;
    }
  }

  .columnContent {
    h1 {
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 19px;
    }
  }

  .columnIcon {
    width: 50px;

    .iconBackground {
      background-color: #f2f2f2;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      img {
        width: 50%;
      }
    }
  }
`;
