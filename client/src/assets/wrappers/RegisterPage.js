import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 2;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  button {
    margin: 0 0 0.5rem;
    height: 35px;
    cursor: pointer;
  }

  .login-btn {
    background-color: var(--secondary-100);
  }

  .gmail-btn {
    background-color: var(--gmail-red);
  }

  .facebook-btn {
    background-color: var(--facebook-blue);
  }

  p {
    text-align: center;
    color: var(--grey-300);
  }

  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--grey-300);
    cursor: pointer;
    letter-spacing: 1px;
  }
  span {
    text-decoration: underline;
    color: #000;
  }
`;

export default Wrapper;
