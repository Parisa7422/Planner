import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 95%;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  .center-items {
    margin: auto;
    width: 73%;
    height: 100vh;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    margin-top: 5%;
  }

  @media (max-width: 900px) {
    width: 80%;
    margin-top: 2%;
    margin-right: 8%;
    float: left;
    .center-items {
      width: 100%;
    }
  }

  @media (max-width: 780px) {
    .flex-row {
      flex-direction: column;
    }
  }
  @media (max-width: 500px) {
    width: 70%;
    .center-items {
      width: 60%;
    }
  }
`;

export default Wrapper;
