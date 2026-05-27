import styled from "styled-components";

const Wrapper = styled.aside`
  background: #112e5b;
  color: #ffffff;
  border-radius: 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.45);
  height: 100%;

  .goal-card {
    background: rgba(15, 23, 42, 0.35);
    border-radius: 20px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
  }

  .goal-header { }

  .goal-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }

  .goal-label { margin: 0; font-size: 12px; opacity: 0.85; }
  .goal-percentage { font-size: 13px; font-weight: 600; }

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
    transition: width 0.4s ease;
  }

  /* Habit list */
  .habit-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
    overflow-y: auto;
    max-height: 240px;
  }

  .habit-empty {
    font-size: 12px;
    opacity: 0.6;
    text-align: center;
    padding: 16px 0;
  }

  .habit-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 10px;
    border-radius: 12px;
    background: rgba(15, 23, 42, 0.25);
  }

  .habit-left {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }

  .habit-dot {
    width: 8px;
    height: 8px;
    flex-shrink: 0;
    border-radius: 999px;
    background: #facc15;
  }

  .habit-name {
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .habit-right {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
  }

  .habit-progress { font-size: 11px; opacity: 0.8; }

  .habit-action-btn {
    border-radius: 8px;
    padding: 3px 8px;
    border: 1px solid rgba(255,255,255,0.25);
    background: transparent;
    color: white;
    font-size: 11px;
    cursor: pointer;
    transition: background 0.15s;
  }

  .habit-action-btn:hover { background: rgba(255,255,255,0.15); }

  .habit-action-btn.done {
    background: #22c55e;
    border-color: #22c55e;
    color: white;
  }

  .habit-delete-btn {
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.4);
    cursor: pointer;
    font-size: 11px;
    padding: 2px 4px;
    border-radius: 4px;
    transition: color 0.15s;
  }

  .habit-delete-btn:hover { color: #f87171; }

  /* Footer buttons */
  .goal-footer {
    display: flex;
    gap: 8px;
    margin-top: 4px;
  }

  .goal-btn {
    flex: 1;
    border-radius: 999px;
    font-size: 12px;
    padding: 7px 10px;
    border: none;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
  }

  .goal-btn:disabled { opacity: 0.5; cursor: default; }

  .goal-btn-primary {
    background: #f1f5f9;
    color: #0f172a;
    font-weight: 600;
  }

  .goal-btn-primary:hover { background: #e2e8f0; transform: translateY(-1px); }

  .goal-btn-ghost {
    background: transparent;
    color: #e5e7eb;
    border: 1px solid rgba(148, 163, 184, 0.5);
  }

  .goal-btn-ghost:hover:not(:disabled) { background: rgba(255,255,255,0.08); }

  /* AI Suggestions */
  .ai-suggestions {
    border-top: 1px solid rgba(255,255,255,0.12);
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ai-label {
    font-size: 11px;
    opacity: 0.7;
    margin: 0 0 4px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .ai-card {
    background: rgba(255,255,255,0.07);
    border-radius: 10px;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .ai-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  .ai-card-title {
    font-size: 13px;
    font-weight: 500;
    flex: 1;
  }

  .ai-add-btn {
    background: rgba(255,255,255,0.15);
    border: none;
    color: white;
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s;
    flex-shrink: 0;
  }

  .ai-add-btn:hover { background: rgba(255,255,255,0.25); }

  .ai-card-reason {
    font-size: 11px;
    opacity: 0.65;
    margin: 0;
    line-height: 1.4;
  }
`;

export default Wrapper;
