import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/NavigationBar";
import { Link } from "react-router-dom";

import note from "../assets/images/Note-icon.svg";
import calender from "../assets/images/calendar-icon.svg";
import about from "../assets/images/About-icon.svg";
import logout from "../assets/images/logout_icon.svg";

import { useAppContext } from "../context/appContext";

const Navbar = () => {
  const { user, logoutUser } = useAppContext();
  return (
    <Wrapper>
      <div className="logo-center">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="link-items">
        <Link
          className="link-item note-icon"
          style={user && { visibility: "visible" }}
          to="/notes"
        >
          <img src={note} alt="icon" />
        </Link>
        {/* <Link className="link-item" to="/contact-us">
          <img src={calender} alt="icon" />
        </Link> */}
        <Link className="link-item" to="/about-us">
          <img src={about} alt="icon" />
        </Link>

        <img
          src={logout}
          className="logout-icon"
          style={user && { visibility: "visible" }}
          onClick={logoutUser}
          alt="icon"
        />
      </div>
    </Wrapper>
  );
};
export default Navbar;
