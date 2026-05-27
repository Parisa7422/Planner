import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  background: #f5f5f5;

  .dashboard-layout {
    display: flex;
    width: 100%;
    min-height: 100vh;
  }

  /* ── SIDEBAR ── */
  .sidebar {
    width: 72px;
    background: #1f3a5f;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 100;
  }

  .sidebar-logo {
    width: 40px; height: 40px;
    border-radius: 999px;
    border: 2px solid #fff;
    color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 18px;
  }

  .sidebar-nav {
    display: flex; flex-direction: column;
    gap: 12px; margin-top: 32px;
  }

  .nav-item {
    width: 38px; height: 38px;
    border-radius: 12px; border: none;
    background: rgba(255,255,255,0.12);
    color: #fff; font-size: 16px;
    cursor: pointer;
    transition: background 0.15s;
    display: flex; align-items: center; justify-content: center;
  }
  .nav-item:hover { background: rgba(255,255,255,0.22); }
  .nav-item.active { background: #fff; }

  .sidebar-logout {
    margin-top: auto;
    width: 38px; height: 38px;
    border-radius: 12px; border: none;
    background: rgba(255,255,255,0.12);
    color: #fff; cursor: pointer; font-size: 18px;
  }

  /* ── MAIN ── */
  .main {
    margin-left: 72px;
    flex: 1;
    padding: 24px 32px;
    display: flex; flex-direction: column; gap: 24px;
  }

  .dashboard-title {
    font-size: 22px; font-weight: 700;
    color: #111827; margin: 0 0 4px;
  }
  .dashboard-subtitle {
    font-size: 14px; color: #6b7280; margin: 0;
  }

  /* ── CONTENT GRID ── */
  .content-row {
    display: grid;
    grid-template-columns: minmax(0, 2.2fr) minmax(260px, 1fr);
    gap: 24px;
    align-items: start;
  }

  /* ── CALENDAR CARD ── */
  .calendar-card {
    background: #fff;
    border-radius: 24px;
    padding: 18px 22px;
    box-shadow: 0 4px 24px rgba(15,23,42,0.07);
  }

  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .calendar-month {
    display: flex; gap: 8px; align-items: baseline;
    font-size: 18px; font-weight: 600; color: #111827;
  }
  .calendar-year { font-size: 13px; color: #6b7280; }

  .calendar-nav button {
    border: none; background: #e5e7eb;
    width: 28px; height: 28px;
    border-radius: 999px; cursor: pointer;
    font-size: 14px; margin-left: 8px;
  }
  .calendar-nav button:hover { background: #d1d5db; }

  /* ── SIDE PANEL ── */
  .side-panel {
    background: #1f3a5f;
    color: #f9fafb;
    border-radius: 24px;
    padding: 18px;
    box-shadow: 0 4px 24px rgba(15,23,42,0.12);
  }
  .side-panel-title {
    font-size: 16px; font-weight: 600; margin: 0 0 12px;
    color: #fff;
  }

  /* ── TABLET (≤1024px) ── */
  @media (max-width: 1024px) {
    .content-row {
      grid-template-columns: 1fr;
    }
    .side-panel { order: -1; }
  }

  /* ── MOBILE (≤768px) ── */
  @media (max-width: 768px) {
    /* Sidebar becomes bottom tab bar */
    .sidebar {
      width: 100%;
      height: 60px;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 0 16px;
      top: auto;
      bottom: 0;
      left: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .sidebar-logo { display: none; }

    .sidebar-nav {
      flex-direction: row;
      gap: 0;
      margin-top: 0;
      flex: 1;
      justify-content: space-around;
    }

    .sidebar-logout {
      margin-top: 0;
    }

    /* Main shifts up instead of left */
    .main {
      margin-left: 0;
      margin-bottom: 60px;
      padding: 16px;
      gap: 16px;
    }

    .dashboard-title { font-size: 18px; }

    .calendar-card {
      padding: 14px;
      border-radius: 16px;
    }

    .calendar-month { font-size: 16px; }

    .content-row { gap: 16px; }

    .side-panel {
      border-radius: 16px;
      padding: 14px;
    }
  }

  /* ── SMALL MOBILE (≤480px) ── */
  @media (max-width: 480px) {
    .main { padding: 12px; }
    .dashboard-title { font-size: 16px; }
  }
`;

export default Wrapper;
