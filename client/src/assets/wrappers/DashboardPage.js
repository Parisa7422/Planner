import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;

  .dashboard-layout {
    display: flex;
    width: 100%;
  }

  .dashboard-title {
    font-size: 24px;
    margin: 0 0 2px;
    font-weight: 700;
    color: #111827;
  }

  .dashboard-subtitle {
    font-size: 14px;
    margin: 0;
    color: #6b7280;
  }

  /* SIDEBAR (left) */
  .sidebar {
    width: 72px;
    background: #1f3a5f;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    gap: 24px;
  }

  .sidebar-logo {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 2px solid #ffffff;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 18px;
  }

  .sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 32px;
  }

  .nav-item {
    width: 32px;
    height: 32px;
    border-radius: 999px;
    border: none;
    background: rgba(255, 255, 255, 0.16);
    color: #ffffff;
    font-size: 14px;
    cursor: pointer;
  }

  .nav-item.active {
    background: #ffffff;
    color: #1f3a5f;
  }

  .sidebar-logout {
    margin-top: auto;
    width: 32px;
    height: 32px;
    border-radius: 999px;
    border: none;
    background: rgba(255, 255, 255, 0.16);
    color: #ffffff;
    cursor: pointer;
  }

  /* MAIN AREA */
  .main {
    flex: 1;
    padding: 16px 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .top-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .greeting {
    font-size: 24px;
    font-weight: 700;
    color: #111827;
  }

  .subtitle {
    font-size: 13px;
    color: #6b7280;
    margin-top: 4px;
  }

  .content-row {
    display: grid;
    grid-template-columns: minmax(0, 2.2fr) minmax(260px, 1fr);
    gap: 24px;
  }

  /* CALENDAR CARD */
  .calendar-card {
    background: #ffffff;
    border-radius: 24px;
    padding: 18px 22px;
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.06);
  }

  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .calendar-month {
    display: flex;
    gap: 8px;
    align-items: baseline;
    font-size: 18px;
    font-weight: 600;
    color: #111827;
  }

  .calendar-year {
    font-size: 13px;
    color: #6b7280;
  }

  .calendar-nav button {
    border: none;
    background: #e5e7eb;
    width: 28px;
    height: 28px;
    border-radius: 999px;
    cursor: pointer;
    font-size: 14px;
    margin: 0 0 0 10px;
  }

  .calendar-nav button:hover {
    background: #d1d5db;
  }

  .calendar-body {
    margin-top: 8px;
  }

  .side-panel {
    background: #1f3a5f;
    color: #f9fafb;
    border-radius: 24px;
    padding: 18px 18px;
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.1);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .side-panel-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    .content-row {
      grid-template-columns: 1fr;
    }

    .side-panel {
      order: -1;
    }
  }

  @media (max-width: 768px) {
    .main {
      padding: 24px 16px;
    }

    .calendar-card {
      padding: 20px 16px;
      border-radius: 18px;
    }
  }
`;

export default Wrapper;
