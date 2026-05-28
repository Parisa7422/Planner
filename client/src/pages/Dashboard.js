import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardPage";
import Calender from "../components/Calender";
import GoalProgress from "../components/GoalProgress";
import { useAppContext } from "../context/appContext";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "📅", path: "/" },
  { label: "Notes", icon: "📝", path: "/notes" },
  { label: "About", icon: "ℹ️", path: "/about-us" },
];

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { logoutUser, user } = useAppContext();

  const now = new Date();
  const [monthIndex, setMonthIndex] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());

  const prevMonth = () => {
    if (monthIndex === 0) { setMonthIndex(11); setYear(y => y - 1); }
    else setMonthIndex(m => m - 1);
  };
  const nextMonth = () => {
    if (monthIndex === 11) { setMonthIndex(0); setYear(y => y + 1); }
    else setMonthIndex(m => m + 1);
  };

  const hour = now.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  const displayName = user?.name || "there";

  return (
    <Wrapper>
      <div className="dashboard-layout">
        <aside className="sidebar">
          <div className="sidebar-logo">P</div>
          <nav className="sidebar-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                title={item.label}
                className={`nav-item ${window.location.pathname === item.path ? "active" : ""}`}
                onClick={() => navigate(item.path)}
              >
                {item.icon}
              </button>
            ))}
          </nav>
          <button className="sidebar-logout" title="Logout" onClick={logoutUser}>
            🚪
          </button>
        </aside>

        <main className="main">
          <header className="top-header">
            <div className="dashboard-header">
              <h1 className="dashboard-title">{greeting}, {displayName} 👋</h1>
              <p className="dashboard-subtitle">Here's an overview of your habits and plans.</p>
            </div>
          </header>

          <section className="content-row">
            <section className="calendar-card">
              <header className="calendar-header">
                <div className="calendar-month">
                  <span>{MONTHS[monthIndex]}</span>
                  <span className="calendar-year">{year}</span>
                </div>
                <div className="calendar-nav">
                  <button onClick={prevMonth}>{"<"}</button>
                  <button onClick={nextMonth}>{">"}</button>
                </div>
              </header>
              <div className="calendar-body">
                <Calender month={MONTHS[monthIndex]} year={year} />
              </div>
            </section>

            <aside className="side-panel">
              <h2 className="side-panel-title">Goal progress</h2>
              <GoalProgress />
            </aside>
          </section>
        </main>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
