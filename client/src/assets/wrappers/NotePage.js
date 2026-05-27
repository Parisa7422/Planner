import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f5f5f5;

  /* ── SIDEBAR ── same as Dashboard */
  .sidebar {
    width: 72px;
    background: #1f3a5f;
    display: flex; flex-direction: column;
    align-items: center; padding: 24px 0;
    position: fixed; top: 0; left: 0;
    height: 100vh; z-index: 100;
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

  /* ── MAIN ── */
  .notes-main {
    margin-left: 72px; flex: 1;
    padding: 32px;
    display: flex; flex-direction: column; gap: 24px;
  }

  .notes-title { font-size: 24px; font-weight: 700; color: #111827; margin: 0 0 4px; }
  .notes-subtitle { font-size: 14px; color: #6b7280; margin: 0; }

  .input-container { display: flex; justify-content: center; }

  .create-note {
    border-radius: 12px; width: 360px;
    background: #fff;
    box-shadow: 0 2px 12px rgba(0,0,0,0.1);
    padding: 12px 16px;
  }
  .create-note input {
    background: transparent; border: none; outline: none;
    color: #111827; padding: 6px 0; font-size: 1em; width: 100%;
  }
  .create-note input::placeholder { color: #9ca3af; }
  .note-textarea {
    width: 100%; padding: 6px 0; border: none;
    background: transparent; outline: none; resize: none;
    color: #374151; font-size: 0.95em;
  }

  /* ── NOTES GRID ── */
  .note-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }

  .note-box {
    background: #1f3a5f; color: white;
    padding: 16px; border-radius: 16px;
    position: relative; min-height: 120px;
    display: flex; flex-direction: column; gap: 8px;
  }
  .note-box-title { font-size: 15px; font-weight: 600; margin: 0; }
  .note-box-content { font-size: 13px; opacity: 0.85; margin: 0; flex: 1; }
  .delete-btn {
    position: absolute; bottom: 10px; right: 10px;
    background: transparent; border: none;
    color: rgba(255,255,255,0.6); cursor: pointer;
    padding: 4px; border-radius: 6px; transition: color 0.15s;
  }
  .delete-btn:hover { color: #f87171; }

  /* ── MOBILE ── */
  @media (max-width: 768px) {
    .sidebar {
      width: 100%; height: 60px;
      flex-direction: row; justify-content: space-around;
      align-items: center; padding: 0 16px;
      top: auto; bottom: 0; left: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    .sidebar-logo { display: none; }
    .sidebar-nav {
      flex-direction: row; gap: 0;
      margin-top: 0; flex: 1; justify-content: space-around;
    }
    .sidebar-logout { margin-top: 0; }

    .notes-main {
      margin-left: 0;
      margin-bottom: 60px;
      padding: 16px; gap: 16px;
    }

    .notes-title { font-size: 20px; }
    .create-note { width: 100%; }

    .note-container {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 12px;
    }
  }

  @media (max-width: 480px) {
    .notes-main { padding: 12px; }
    .note-container { grid-template-columns: 1fr 1fr; }
  }
`;

export default Wrapper;
