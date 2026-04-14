import styled from "styled-components";

const Wrapper = styled.aside`
  background: #112e5b;
  color: #ffffff;
  border-radius: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.45);

  .goal-card {
    background: rgba(15, 23, 42, 0.35);
    border-radius: 20px;
    padding: 16px 16px 14px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .goal-header {
    margin-bottom: 10px;
  }

  .goal-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }

  .goal-label {
    margin: 0;
    font-size: 12px;
    opacity: 0.85;
  }

  .goal-percentage {
    font-size: 13px;
    font-weight: 600;
  }

  .goal-progress-bar {
    width: 100%;
    height: 6px;
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.6);
    overflow: hidden;
  }

  .goal-progress-fill {
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #22c55e, #a3e635);
    transition: width 0.3s ease;
  }

  /* ---Habit's List --- */

  .habit-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  .habit-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 10px;
    border-radius: 12px;
    background: rgba(15, 23, 42, 0.18);
  }

  .habit-left {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .habit-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #facc15;
  }

  .habit-name {
    font-size: 13px;
  }

  .habit-right {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
  }

  .habit-progress {
    opacity: 0.9;
  }

  .habit-trend {
    font-size: 11px;
  }

  .habit-trend--up {
    color: #22c55e;
  }

  .habit-trend--steady {
    color: #facc15;
  }

  .habit-trend--down {
    color: #f97373;
  }

  /* --- Buttons --- */

  .goal-footer {
    margin-top: 12px;
    display: flex;
    gap: 8px;
  }

  .goal-btn {
    flex: 1;
    border-radius: 999px;
    font-size: 12px;
    padding: 7px 10px;
    border: none;
    cursor: pointer;
    transition: background 0.15s ease, transform 0.1s ease,
      box-shadow 0.15s ease;
  }

  .goal-btn-primary {
    background: #f1f5f9;
    color: #0f172a;
    font-weight: 600;
  }

  .goal-btn-primary:hover {
    background: #e2e8f0;
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.35);
  }

  .goal-btn-ghost {
    background: transparent;
    color: #e5e7eb;
    border: 1px solid rgba(148, 163, 184, 0.7);
  }

  .goal-btn-ghost:hover {
    background: rgba(15, 23, 42, 0.55);
  }
`;

export default Wrapper;
