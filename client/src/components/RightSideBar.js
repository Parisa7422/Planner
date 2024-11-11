import { useState } from "react";
import Wrapper from "../assets/wrappers/SideBar";
import SidebarItem from "./SidebarItem";
import sidebarIcon from "../assets/images/sidebar-icon.svg";

const RightSideBar = () => {
  const [isOpen, setOpen] = useState(false);
  const getMonth = () => {
    const today = new Date();
    return today.toLocaleString("en-us", { month: "long" });
  };

  const month = getMonth();

  const handleOpenMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <Wrapper style={{ width: isOpen ? "200px" : null }}>
      <div
        className="sidebar-menu"
        onClick={handleOpenMenu}
        style={{ marginRight: isOpen ? "200px" : "0" }}
      >
        <img src={sidebarIcon} />
      </div>
      <div className="profile"></div>
      <div className="sidebar-items">
        <SidebarItem name="monthGoals" title={month + " goals"} />
        <SidebarItem name="books" title="books to read" />
        <SidebarItem name="movies" title="movies to see" />
        <SidebarItem name="learning" title="learning plans" />
      </div>
    </Wrapper>
  );
};
export default RightSideBar;
