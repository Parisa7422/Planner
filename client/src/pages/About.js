import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import styled from "styled-components";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "📅", path: "/" },
  { label: "Notes", icon: "📝", path: "/notes" },
  { label: "About", icon: "ℹ️", path: "/about-us" },
];

const About = () => {
  const navigate = useNavigate();
  const { logoutUser } = useAppContext();

  return (
    <Wrapper>
      {/* SIDEBAR */}
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
        <button className="sidebar-logout" title="Logout" onClick={logoutUser}>🚪</button>
      </aside>

      {/* MAIN */}
      <main className="about-main">
        <div className="about-card">
          <div className="about-avatar">P</div>
          <h1 className="about-name">Parisa Tahery</h1>
          <p className="about-role">Full-Stack Developer · Utrecht, NL</p>

          <p className="about-text">
            A life plan is both <strong>a guide and a reminder of what you want to achieve.</strong> It helps you realize your dreams.
            Here you can plan your days and months, track your habits, and write your thoughts — because <strong>everything is possible</strong> with the right planning.
          </p>

          <p className="about-text">
            Achieving your goals needs consistency. It may take days, months, or even years — but small daily habits are what get you there.
            I hope this app helps you stay on track. 💙
          </p>

          <div className="about-links">
            <a href="https://www.linkedin.com/in/parisa-taheri-a6688a13b/" target="_blank" rel="noreferrer" className="about-link linkedin">
              LinkedIn
            </a>
            <a href="https://t.me/parisaa7422" target="_blank" rel="noreferrer" className="about-link telegram">
              Telegram
            </a>
            <a href="https://www.instagram.com/parisa7422/" target="_blank" rel="noreferrer" className="about-link instagram">
              Instagram
            </a>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f5f5f5;

  .sidebar {
    width: 72px; background: #1f3a5f;
    display: flex; flex-direction: column;
    align-items: center; padding: 24px 0;
    position: fixed; top: 0; left: 0; height: 100vh; z-index: 100;
  }
  .sidebar-logo {
    width: 40px; height: 40px; border-radius: 999px;
    border: 2px solid #fff; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 18px;
  }
  .sidebar-nav { display: flex; flex-direction: column; gap: 12px; margin-top: 32px; }
  .nav-item {
    width: 38px; height: 38px; border-radius: 12px; border: none;
    background: rgba(255,255,255,0.12); color: #fff; font-size: 16px;
    cursor: pointer; transition: background 0.15s;
    display: flex; align-items: center; justify-content: center;
  }
  .nav-item:hover { background: rgba(255,255,255,0.22); }
  .nav-item.active { background: #fff; }
  .sidebar-logout {
    margin-top: auto; width: 38px; height: 38px;
    border-radius: 12px; border: none;
    background: rgba(255,255,255,0.12); color: #fff; cursor: pointer; font-size: 18px;
  }

  .about-main {
    margin-left: 72px; flex: 1;
    display: flex; align-items: center; justify-content: center;
    padding: 40px 24px;
  }

  .about-card {
    background: #fff;
    border-radius: 24px;
    padding: 48px 40px;
    max-width: 560px;
    width: 100%;
    box-shadow: 0 4px 32px rgba(15,23,42,0.08);
    display: flex; flex-direction: column; align-items: center;
    gap: 16px; text-align: center;
  }

  .about-avatar {
    width: 72px; height: 72px; border-radius: 999px;
    background: #1f3a5f; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 28px; font-weight: 700;
  }

  .about-name { font-size: 24px; font-weight: 700; color: #111827; margin: 0; }
  .about-role { font-size: 14px; color: #6b7280; margin: 0; }

  .about-text {
    font-size: 15px; line-height: 1.7; color: #374151;
    margin: 0; text-align: left;
    strong { color: #1f3a5f; }
  }

  .about-links {
    display: flex; gap: 12px; flex-wrap: wrap;
    justify-content: center; margin-top: 8px;
  }

  .about-link {
    padding: 8px 20px; border-radius: 999px;
    font-size: 14px; font-weight: 600;
    text-decoration: none; transition: opacity 0.15s;
  }
  .about-link:hover { opacity: 0.85; }
  .linkedin  { background: #0077b5; color: #fff; }
  .telegram  { background: #2ca5e0; color: #fff; }
  .instagram { background: #e1306c; color: #fff; }

  @media (max-width: 768px) {
    .sidebar {
      width: 100%; height: 60px; flex-direction: row;
      justify-content: space-around; align-items: center;
      padding: 0 16px; top: auto; bottom: 0; left: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    .sidebar-logo { display: none; }
    .sidebar-nav { flex-direction: row; gap: 0; margin-top: 0; flex: 1; justify-content: space-around; }
    .sidebar-logout { margin-top: 0; }
    .about-main { margin-left: 0; margin-bottom: 60px; padding: 24px 16px; align-items: flex-start; }
    .about-card { padding: 32px 20px; }
  }
`;

export default About;
