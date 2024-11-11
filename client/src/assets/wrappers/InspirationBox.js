import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--grey-50);
  width: 100%;
  height: 18%;
  border-radius: var(--borderRadius);
  margin-top: 5%;
  display: flex;
  position: relative;
  .next-icon {
    margin-left: auto;
  }
  .icon {
    cursor: pointer;
    z-index: 2;
  }

  .text-container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
  }
  .inspire-text {
    padding: 0 10%;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    text-align: center;
    text-shadow: 1px 1.2px var(--grey-100);
    color: var(--black);
    letter-spacing: 0.1rem;
    font-size: 1.5em;
  }
  @media (max-width: 1000px) {
    height: 12%;

    .inspire-text {
      font-size: 1em;
      padding: 0 10%;
    }
  }

  @media (max-width: 500px) {
    margin-top: 15%;
    position: absolute;
    right: 1%;

    .inspire-text {
      font-size: 0.8em;
    }
  }
`;
export default Wrapper;
