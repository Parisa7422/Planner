import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  column-gap: 12px;
  row-gap: 16px;
  padding: 8px 0 16px;
  background: transparent;
  border-radius: 24px;

  .day {
    font-size: 12px;
    font-weight: 600;
    color: #9aa3b5;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 4px;
  }
  .days {
    width: 100%;
    height: 78px;
    margin: 0;
    padding: 10px 0 0 10px;
    border-radius: 18px;
    border: 1px solid #add7e2;
    background: #e6f5f5;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.15s ease-out;
  }

  .days:hover {
    background: #d4ebe7;
    border-color: #b6d5cf;
    transform: translateY(-1px);
  }

  .select {
    background: #2563eb;
    color: #ffffff;
    border-color: transparent;
    box-shadow: 0 8px 18px rgba(37, 99, 235, 0.3);
  }
  @media (max-width: 1200px) {
    width: 60%;
    column-gap: 5%;
  }

  @media (max-width: 780px) {
    width: 100%;
    justify-content: center;
  }
  @media (max-width: 500px) {
    margin-top: 20%;
    grid-template-columns: repeat(7, 28px);
    grid-template-rows: 40px repeat(6, 28px);
    column-gap: 9%;

    .day {
      font-size: 1em;
    }
  }
`;

export default Wrapper;
