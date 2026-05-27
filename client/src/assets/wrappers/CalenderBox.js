import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 6px;
  padding: 8px 0 16px;

  .day {
    font-size: 11px; font-weight: 600;
    color: #9aa3b5; text-transform: uppercase;
    text-align: center; margin-bottom: 4px;
  }

  .days {
    width: 100%; height: 64px;
    padding: 8px 0 0 8px;
    border-radius: 14px;
    border: 1px solid #add7e2;
    background: #e6f5f5;
    font-size: 12px; cursor: pointer;
    transition: all 0.15s ease-out;
  }
  .days:hover { background: #d4ebe7; transform: translateY(-1px); }
  .select {
    background: #2563eb; color: #fff;
    border-color: transparent;
    box-shadow: 0 4px 12px rgba(37,99,235,0.3);
  }

  /* Tablet */
  @media (max-width: 1024px) {
    .days { height: 56px; }
  }

  /* Mobile */
  @media (max-width: 768px) {
    gap: 4px;
    .days {
      height: 40px;
      padding: 6px 0 0 6px;
      border-radius: 8px;
      font-size: 11px;
    }
    .day { font-size: 10px; }
  }

  /* Small mobile */
  @media (max-width: 400px) {
    gap: 3px;
    .days {
      height: 34px;
      padding: 4px 0 0 4px;
      font-size: 10px;
      border-radius: 6px;
    }
  }
`;

export default Wrapper;
