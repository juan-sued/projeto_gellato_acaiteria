import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;

  border-radius: 4px;
  min-width: 100%;
  z-index: 3;
  margin-bottom: 90px;

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: white;
    min-width: 100%;
    height: 80px;
    padding: 10px;
    box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 2px 2px 0px 0px;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      width: 155px;

      &:hover {
        background: #7159c1;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 25px;
    margin-left: 5px;
  }
`;
