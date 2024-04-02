import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { LoginCredential, userLogin } from "../reducers/actions/authActions";

const Login = () => {
  const [email, setEmail] = useState("rshawe2");
  const [password, setPassword] = useState("OWsTbMUgFc");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const { token, error, loading } = useSelector(
    (state: RootState) => state.authentication
  );

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

  const dispatch = useDispatch<AppDispatch>();

  const onButtonClick = () => {
    setEmailError("");
    setPasswordError("");
    if (email.length == 0 || password.length == 0) {
      if (email.length == 0) setEmailError("username empty !");
      if (password.length == 0) setPasswordError("password empty !");
      return;
    }

    let data: LoginCredential = { email: email, password: password };

    dispatch(userLogin(data));

    console.log(email, password);
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          disabled={loading ? true : false}
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={loading ? "..." : "loggin"}
        />
        {error && error}
      </div>
    </div>
  );
};

export default Login;
