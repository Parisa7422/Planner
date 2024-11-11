import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 4% 15%;
  background-color: var(--accent-50);
  width: calc(100% - 50px);
  height: 100%;
  justify-content: center;
  text-align: justify;
  text-justify: inter-word;

  .about-text {
    color: var(--black);
    line-height: 2;
    font-size: 1.2em;
  }

  .bold-text {
    color: var(--secondary-100);
  }
  .social-links {
    display: flex;
    justify-content: space-between;
    width: 20%;
    align-items: center;
    margin: 2% auto;
  }

  .social-item {
    text-decoration: none;
    list-style-type: none;
    color: var(--primary-100);
    font-size: 2em;
  }
  .social-item :visited {
    color: var(--primary-100);
  }
  .social-item :hover {
    color: var(--primary-50);
  }
  .social-item :visited {
    color: var(--primary-200);
  }

  @media (max-width: 1024px) {
    font-size: 0.88em;
  }
  @media (max-width: 1000px) {
    .social-links {
      width: 30%;
    }
  }
  @media (max-width: 765px) {
    padding: 3% 8%;
    line-height: normal;
  }
  @media (max-width: 635px) {
    padding: 3% 8%;

    .about-text {
      line-height: normal;
    }
  }
  @media (max-width: 550px) {
    .social-links {
      width: 50%;
      margin-top: 5%;
    }
  }

  @media (max-width: 300px) {
    font-size: 0.7em;
  }
`;

export default Wrapper;
