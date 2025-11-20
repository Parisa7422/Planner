import { Alert, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import loginSlide from "../assets/images/login-slide.jpg";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  // use navigate
  const navigate = useNavigate();

  // user State
  const [users, setUsers] = useState(initialState);

  // global state
  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext();

  // email error
  const [emailError, setEmailError] = useState("");

  // input handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
  };

  //form Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password, name, isMember } = users;

    // Check required fields
    if (!email || !password || (!isMember && !name)) {
      setEmailError(""); //do not show email error for empty fields
      displayAlert();
      return;
    }

    // Email validation pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // clear email error if valid
    setEmailError("");

    const currentUser = { name, email, password };

    if (isMember) {
      //Login
      await setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Welcome back! Redirecting to your dashboard...",
      });
      navigate("/");
    } else {
      //Register
      await setupUser({
        currentUser,
        endPoint: "register",
        alertText: "Account created successfully! Please sign in.",
      });
      navigate("/");
    }
  };

  //Toggle member between login and register
  const toggleMember = () => {
    setUsers({
      ...users,
      isMember: !users.isMember,
    });
  };

  return (
    <Wrapper>
      <div className="login-container">
        {/* Left section: form */}
        <div className="login-left">
          {showAlert && <Alert />}

          <h1 className="login-title">
            {users.isMember ? "Welcome Back!" : "Create your account"}
          </h1>

          <p className="login-subtitle">
            {users.isMember
              ? "Please enter login details below"
              : "Join Discipline and start building better habits."}
          </p>

          <form className="login-form" onSubmit={onSubmit}>
            {/* Full name only for register mode */}
            {!users.isMember && (
              <FormRow
                type="text"
                name="name"
                placeholder="Name"
                handleChange={handleChange}
                value={users.name}
              />
            )}

            {/* Email */}
            <FormRow
              type="text"
              name="email"
              placeholder="Email"
              handleChange={handleChange}
              value={users.email}
            />
            {emailError && <p className="input-error">{emailError}</p>}

            {/* Password */}
            <FormRow
              type="password"
              name="password"
              placeholder="Password"
              handleChange={handleChange}
              value={users.password}
            />

            {users.isMember && (
              <div className="login-row">
                <span className="login-link forgot-password">
                  Forgot password?
                </span>
              </div>
            )}

            <button
              type="submit"
              className="login-btn-primary btn"
              disabled={isLoading}
            >
              {users.isMember ? "Sign In" : "Sign Up"}
            </button>

            <div className="login-divider">
              <div className="login-divider-line" />
              <span>Or</span>
              <div className="login-divider-line" />
            </div>

            <button type="button" className="login-btn-secondary btn">
              Log in with Google
            </button>
            <div className="login-footer">
              {users.isMember ? (
                <>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="member-btn"
                    onClick={toggleMember}
                  >
                    <span>Sign up</span>
                  </button>
                </>
              ) : (
                <>
                  Already a member?{" "}
                  <button
                    type="button"
                    className="member-btn"
                    onClick={toggleMember}
                  >
                    <span>Sign in</span>
                  </button>
                </>
              )}
            </div>
          </form>
        </div>

        {/* Right section: background / image */}
        <div className="login-right" />
        <img
          className="login-right-img"
          src={loginSlide}
          alt="Discipline illustration"
        />
      </div>
    </Wrapper>
  );
};
export default Register;
