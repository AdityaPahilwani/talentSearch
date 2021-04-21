/** @format */

import React, { useReducer } from "react";
import classes from "./SignIn.module.css";
import { Link } from "react-router-dom";
import { useForm, CHANGE } from "../../Hooks/formHooks/useForm";
import { useHistory } from "react-router-dom";
import SignINSVG from "../../assets/SignIn.svg";
import { SIGN_IN } from "./apollo/Mutations";
import { useMutation } from "@apollo/client";
import Paths from "../../Constants/paths";

const SignIn = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(useForm, {
    email: "",
    password: "",
  });
  const [signIn] = useMutation(SIGN_IN);
  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    dispatch({
      type: CHANGE,
      data: {
        key: event.target.name,
        value: event.target.value,
      },
    });
  };
  const SubmitHandler = async (event) => {
    event.preventDefault();
    try {
      console.log("INN", state);
      const { errors, data } = await signIn({
        variables: { email: state.email, password: state.password },
      });
      console.log(errors);
      console.log(data.signIn);
      if (data.signIn.success) {
        // let options = { maxAge: 14 * 24 * 60 * 60 * 1000, path: "/" };
        // CookieService.set("userSession", data.signIn.cookie, options);
        history.push(Paths.feed);
      }
    } catch (err) {
      console.log("erro", JSON.stringify(err, null, 2));
    }
  };
  return (
    <div className={classes.Container}>
      <div className={classes.box}>
        <div className={classes.imageBox}>
          <img src={SignINSVG} alt="Sign IN" />
        </div>
        <div className={classes.fields}>
          <h1 className={classes.heading}>Welcome Back</h1>
          {/* <p className={classes.text}>Log-In to your Workplace</p> */}
          <form onSubmit={SubmitHandler} className={classes.form}>
            <input
              type={"text"}
              name="email"
              onChange={handleChange}
              className={classes.input}
              placeholder={"Email"}
            />
            <input
              placeholder={"Password"}
              value={state.Password}
              onChange={handleChange}
              name="password"
              type={"password"}
              className={classes.input}
            />
            <button className={classes.btn}>Sign-In</button>
          </form>
          <p className={classes.Register}>
            New User?{" "}
            <span className={classes.link}>
              <Link to={"/register"}>Register</Link>
            </span>{" "}
            Here
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
