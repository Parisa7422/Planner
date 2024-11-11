import { Alert, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

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

  // input handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
  };

  //form Submit
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, name, isMember } = users;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };

    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful! Redirecting...",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Created! Redirecting...",
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  //Toggle member between login and register
  const toggleMember = () => {
    setUsers({
      ...users,
      isMember: !users.isMember,
    });
  };

  return (
    <div>
      <div className="background-img"></div>
      <Wrapper>
        <form onSubmit={onSubmit}>
          {showAlert && <Alert />}
          {/* name input if user not member */}
          {!users.isMember && (
            <FormRow
              type="text"
              name="name"
              placeholder="Name"
              handleChange={handleChange}
              value={users.name}
            />
          )}

          {/* email input */}
          <FormRow
            type="email"
            name="email"
            placeholder="Email"
            handleChange={handleChange}
            value={users.email}
          />
          {/* password input */}
          <FormRow
            type="password"
            name="password"
            placeholder="Password"
            handleChange={handleChange}
            value={users.password}
          />

          <button type="submit" className="login-btn btn" disabled={isLoading}>
            {users.isMember ? "Log in" : "Register"}
          </button>
          {/* {users.isMember && (
            <button className="btn gmail-btn">Log in with google</button>
          )}
          {users.isMember && (
            <button className="btn facebook-btn">Log In with facebook</button>
          )} */}

          <p>
            {users.isMember
              ? "Don't you have an account?"
              : "Already a member?"}
            <button type="button" className="member-btn" onClick={toggleMember}>
              <span>{users.isMember ? "Register" : "Login"}</span>
            </button>
          </p>
        </form>
      </Wrapper>
    </div>
  );
};
export default Register;
