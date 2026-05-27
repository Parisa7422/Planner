import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f5f5f5;

  /* SIDEBAR — matches Dashboard */
  .sidebar {
    width: 72px;
    background: #1f3a5f;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    gap: 24px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 10;
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
    width: 38px;
    height: 38px;
    border-radius: 12px;
    border: none;
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-item:hover {
    background: rgba(255, 255, 255, 0.22);
  }

  .nav-item.active {
    background: #ffffff;
  }

  .sidebar-logout {
    margin-top: auto;
    width: 38px;
    height: 38px;
    border-radius: 12px;
    border: none;
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
    cursor: pointer;
    font-size: 18px;
  }

  /* MAIN AREA */
  .notes-main {
    margin-left: 72px;
    flex: 1;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .notes-header {
    margin-bottom: 4px;
  }

  .notes-title {
    font-size: 24px;
    font-weight: 700;
    color: #111827;
    margin: 0 0 4px;
  }

  .notes-subtitle {
    font-size: 14px;
    color: #6b7280;
    margin: 0;
  }

  /* INPUT */
  .input-container {
    display: flex;
    justify-content: center;
  }

  .create-note {
    border-radius: 12px;
    width: 360px;
    background: #ffffff;
    box-shadow: 0 2px 12px rgba(0,0,0,0.1);
    padding: 12px 16px;
  }

  .create-note input {
    background: transparent;
    border: none;
    outline: none;
    color: #111827;
    padding: 6px 0;
    font-size: 1em;
    width: 100%;
  }

  .create-note input::placeholder {
    color: #9ca3af;
  }

  .note-textarea {
    width: 100%;
    padding: 6px 0;
    border: none;
    background: transparent;
    outline: none;
    resize: none;
    color: #374151;
    font-size: 0.95em;
  }

  /* NOTES GRID */
  .note-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
  }

  .note-box {
    background: #1f3a5f;
    color: white;
    padding: 16px;
    border-radius: 16px;
    position: relative;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .note-box-title {
    font-size: 15px;
    font-weight: 600;
    margin: 0;
  }

  .note-box-content {
    font-size: 13px;
    opacity: 0.85;
    margin: 0;
    flex: 1;
  }

  .delete-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.6);
    cursor: pointer;
    padding: 4px;
    border-radius: 6px;
    transition: color 0.15s;
  }

  .delete-btn:hover {
    color: #f87171;
  }
`;

export default Wrapper;
