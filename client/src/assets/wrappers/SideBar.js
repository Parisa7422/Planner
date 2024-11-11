import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  background-color: var(--white);
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.3);
  width: 15%;
  height: 100vh;
  .profile {
    aspect-ratio: 1/1;
    width: 50%;
    margin: 30% auto;
    background-color: antiquewhite;
    border-radius: 50%;
    text-align: center;
  }
  .sidebar-items {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin: auto;
    padding: 20% 0 95%;
    width: 70%;
    position: relative;
  }
  .sidebar-menu {
    visibility: hidden;
  }

  @media (max-width: 1200px) {
    width: 20%;
  }
  @media (max-width: 900px) {
    /* display: none; */

    position: fixed;
    right: 0;
    top: 0;
    z-index: 3;
    width: 0;

    .sidebar-menu {
      visibility: visible;
      position: absolute;
      cursor: pointer;
      right: 0;
      top: 10px;
    }
  }
`;

export default Wrapper;
