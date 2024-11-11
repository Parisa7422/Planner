import styled from "styled-components";

const Wrapper = styled.div`
  width: 70%;
  height: 350px;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(7, 35px);
  grid-template-rows: 55px repeat(6, 35px);
  /* gap: 6%; */
  column-gap: 9%;
  row-gap: 4%;
  text-align: center;
  .day {
    color: var(--grey-300);
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  .days {
    background-color: var(--white);
    border: 1px solid var(--grey-300);
    color: var(--grey-300);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
  }

  .select {
    background-color: var(--secondary-100);
    border: none;
    color: var(--white);
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
