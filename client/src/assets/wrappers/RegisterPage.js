import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background-color: #f5f7fb;

  .login-container {
    width: 100%;
    max-width: 1100px;
    display: flex;
    background-color: #ffffff;
    border-radius: 24px;
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
    overflow: hidden;
  }

  .login-left {
    flex: 1;
    padding: 48px 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .login-right {
    flex: 1;
    background-color: #e8f0fb;
  }
  .login-right-img {
    width: 80%;
    max-width: 520px;
    object-fit: cover;
  }

  .login-title {
    font-size: 32px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 4px;
  }

  .login-subtitle {
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 32px;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 8px; /* less vertical spacing */
    margin-top: 28px;
    background: transparent;
    padding: 20px 0;
  }

  .form-input {
    width: 100%;
    height: 44px; /* a bit shorter */
    padding: 0 18px;
    border-radius: 999px;
    border: 1px solid transparent; /* visually no border */
    background-color: #f8fafc;
    font-size: 14px;
    color: #111827;
    outline: none;
    transition: all 0.15s ease-in-out;
    box-shadow: 0 0 0 1px #d1d5db; /* soft border look */
  }

  .form-input::placeholder {
    color: #9ca3af;
  }

  .form-input:focus {
    box-shadow: 0 0 0 1px rgba(31, 58, 95, 0.4);
    border-color: #1f3a5f;
    background-color: #ffffff;
  }

  .login-label {
    font-size: 13px;
    color: #111827;
    margin-bottom: 6px;
  }

  .login-input {
    width: 100%;
    padding: 14px 16px;
    border-radius: 999px;
    border: none;
    background-color: #f7faff;
    font-size: 14px;
    outline: none;
  }

  .login-input:focus {
    box-shadow: 0 0 0 2px rgba(31, 58, 95, 0.2);
  }

  .login-row {
    display: flex;
    justify-content: flex-end;
    margin-top: -10px;
    font-size: 12px;
    color: #111827;
  }

  .login-link {
    color: #1f3a5f;
    font-weight: 500;
    cursor: pointer;
  }

  .login-btn-primary {
    width: 100%;
    padding: 16px;
    border-radius: 999px;
    border: none;
    background-color: #1f3a5f;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
  }

  .login-btn-primary:hover {
    background-color: #244a73;
  }

  .forgot-password {
    margin-top: 6px;
    margin-bottom: 8px;
    font-size: 12px;
    text-align: right;
    transition: 0.2s;
  }

  .forgot-password:hover {
    color: #25456b;
    text-decoration: underline;
  }

  .login-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 18px 0;
    font-size: 13px;
    color: #6b7280;
  }

  .login-divider-line {
    flex: 1;
    height: 1px;
    background-color: #d1d5db;
  }

  .login-btn-secondary {
    width: 100%;
    padding: 14px;
    border-radius: 999px;
    border: 1px solid #1f3a5f;
    background-color: #ffffff;
    color: #1f3a5f;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
  }

  .login-btn-secondary:hover {
    background-color: #e8f0fb;
  }

  .login-footer {
    margin-top: 24px;
    font-size: 13px;
    color: #6b7280;
    text-align: center;
  }

  .login-footer span {
    color: #1f3a5f;
    font-weight: 600;
    cursor: pointer;
  }

  .member-btn {
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    color: #1f3a5f;
    font-weight: 600;
    cursor: pointer;
    box-shadow: none;
    font: inherit;
  }

  .member-btn:hover {
    text-decoration: underline;
  }

  .member-btn:focus {
    outline: none;
  }

  .input-error {
    margin-top: 4px;
    font-size: 12px;
    color: #b91c1c; /* red-700 */
  }

  @media (max-width: 1024px) {
    .login-container {
      max-width: 600px;
      margin: 40px auto;
      border-radius: 20px;
    }

    .login-right {
      display: none;
    }

    .login-left {
      padding: 32px 32px;
    }
  }

  @media (max-width: 768px) {
    .login-container {
      max-width: 100%;
      margin: 0;
      border-radius: 0;
      box-shadow: none;
    }

    .login-left {
      padding: 24px 16px;
    }

    .login-title {
      font-size: 24px;
    }

    .login-subtitle {
      font-size: 13px;
      margin-bottom: 20px;
    }

    .login-form {
      gap: 10px;
      margin-top: 20px;
    }

    .login-btn-primary,
    .login-btn-secondary {
      padding: 14px;
      font-size: 15px;
    }

    .login-footer {
      font-size: 13px;
      margin-top: 18px;
    }
  }
`;

export default Wrapper;
