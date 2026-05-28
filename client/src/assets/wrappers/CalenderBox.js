import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  column-gap: 12px;
  row-gap: 16px;
  padding: 8px 0 16px;

  .day {
    font-size: 12px; font-weight: 600;
    color: #9aa3b5; text-transform: uppercase;
    text-align: center; margin-bottom: 4px;
  }

  /* DESKTOP — original style */
  .days {
    width: 100%; height: 78px;
    padding: 10px 0 0 10px;
    border-radius: 18px;
    border: 1px solid #add7e2;
    background: #e6f5f5;
    font-size: 12px; cursor: pointer;
    transition: all 0.15s ease-out;
  }
  .days:hover { background: #d4ebe7; border-color: #b6d5cf; transform: translateY(-1px); }
  .select {
    background: #2563eb; color: #fff;
    border-color: transparent;
    box-shadow: 0 8px 18px rgba(37,99,235,0.3);
  }

  /* TABLET */
  @media (max-width: 900px) {
    column-gap: 6px; row-gap: 8px;
    .days { height: 56px; border-radius: 12px; padding: 6px 0 0 6px; }
  }

  /* MOBILE */
  @media (max-width: 768px) {
    column-gap: 4px; row-gap: 6px;
    .days { height: 38px; border-radius: 8px; padding: 5px 0 0 5px; font-size: 11px; }
    .day { font-size: 9px; }
  }

  @media (max-width: 400px) {
    column-gap: 3px; row-gap: 4px;
    .days { height: 30px; border-radius: 6px; font-size: 10px; }
  }
`;

export default Wrapper;
