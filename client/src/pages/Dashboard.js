import Wrapper from "../assets/wrappers/DashboardPage";
import Calender from "../components/Calender";
import GoalProgress from "../components/GoalProgress";

const Dashboard = () => {
  const today = new Date();
  const monthName = today.toLocaleString("en-US", { month: "long" });
  const year = today.getFullYear();

  return (
    <Wrapper>
      <div className="dashboard-layout">
        {/* LEFT SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-logo">D</div>

          <nav className="sidebar-nav">
            <button className="nav-item active">C</button>
            <button className="nav-item">N</button>
            <button className="nav-item">H</button>
          </nav>

          <button className="sidebar-logout">⟲</button>
        </aside>

        {/* MAIN CONTENT */}
        <main className="main">
          {/* TOP HEADER */}
          <header className="top-header">
            <div className="dashboard-header">
              <h1 className="dashboard-title">Good morning, Parisa 👋</h1>
              <p className="dashboard-subtitle">
                Here’s an overview of your habits and plans.
              </p>
            </div>
          </header>

          {/* CONTENT ROW */}
          <section className="content-row">
            {/* CALENDAR CARD */}
            <section className="calendar-card">
              <header className="calendar-header">
                <div className="calendar-month">
                  <span>{monthName}</span>
                  <span className="calendar-year">{year}</span>
                </div>

                <div className="calendar-nav">
                  <button>{"<"}</button>
                  <button>{">"}</button>
                </div>
              </header>

              <div className="calendar-body">
                <Calender month={monthName} />
              </div>
            </section>

            {/* SIDE PANEL – فعلاً GoalProgress رو می‌ذاریم اینجا */}
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
