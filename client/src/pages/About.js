import Wrapper from "../assets/wrappers/AboutPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faTelegram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <Wrapper>
      <div className="about-text">
        A life plan is both
        <span className="bold-text">
          {" "}
          a guide and a reminder of what you want to achieve in your life.{" "}
        </span>
        It helps you realize your dreams. There's no reason why you can't
        achieve your goals, as long as they're realistic. <br />
        here you can plan your days/months, and specify your goal, you can
        choose them whether daily or monthly. it can be anything like movies you
        want to see or books you want to read ... <br /> because I believe
        <span className="bold-text"> everything is possible. </span> achieving
        your goals need planning, it may take days, months, or even years to
        reach them, you would also need some other activities to boost you like
        watching movies, reading books, traveling, and even learning something
        new.
        <br /> all of that can helps you to achieve your goal with positive
        energy and attitude.
        <br />
        <br /> I hope I can help you to achieve your goals. <br />
        And if you have any suggestions I am glad to hear them with me ❤️
      </div>

      <ul class="social-links">
        <li class="social-item">
          <a href="https://www.linkedin.com/in/parisa-taheri-a6688a13b/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li class="social-item">
          <a href="https://t.me/parisaa7422">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </li>
        <li class="social-item">
          <a href="https://www.instagram.com/parisa7422/?hl=en">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};
export default About;
