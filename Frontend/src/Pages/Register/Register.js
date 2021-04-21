/** @format */

import React, { useReducer } from "react";
import classes from "./Register.module.css";
import RegisterSVG from "../../assets/Register.svg";
import { useMutation } from "@apollo/client";
import { RegisterHandler } from "./apollo/Mutation";
import { useForm, CHANGE } from "../../Hooks/formHooks/useForm";
import { useHistory } from "react-router-dom";
import Cookie from "universal-cookie";
import Paths from "../../Constants/paths";

const CookieService = new Cookie();

const Register = () => {
  const history = useHistory();
  const [signUp] = useMutation(RegisterHandler);
  const [state, dispatch] = useReducer(useForm, {
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Gender: "Male",
    Bio: "",
  });
  const SubmitHandler = async () => {
    if (state.Password === state.ConfirmPassword) {
    
      const { errors, data, } = await signUp({
        variables: {
          name: state.Name,
          email: state.Email,
          password: state.Password,
          gender: state.Gender,
          bio: state.Bio,
        },
      });
      const { success, message, cookie, error } = data.signUp;
      if (success) {
        // let options = { maxAge: 14 * 24 * 60 * 60 * 1000, path: "/" };
        // CookieService.set("userSession", cookie, options);
        history.push(Paths.feed);
      } else {
        alert(error);
      }
      console.log(errors);
      console.log(data);
    } else {
      alert("Passords do not match");
    }
  };

  const handleChange = (event) => {
    dispatch({
      type: CHANGE,
      data: {
        key: event.target.name,
        value: event.target.value,
      },
    });
  };
  return (
    <div className={classes.background}>
      <div className={classes.Container}>
        <div className={classes.SVGContainer}>
          <img
            height="450px"
            width="500px"
            className={classes.svg}
            src={RegisterSVG}
            alt="register Svg"
          />
        </div>
        <div className={classes.form}>
          <h4 className={classes.heading}>Welcome to Talent Hunt</h4>
          <div className={classes.flex}>
            <div className={classes.col}>
              <label className={classes.label}>Name</label>
              <input
                type={"text"}
                placeholder={"Mark Cuban"}
                className={classes.input}
                value={state.Name}
                name="Name"
                onChange={handleChange}
              />
            </div>
            <div className={classes.col}>
              <label className={classes.label}>Email</label>

              <input
                value={state.Email}
                name="Email"
                onChange={handleChange}
                type={"email"}
                placeholder={"mark.cuban@gmail.com"}
                className={classes.input}
              />
            </div>
          </div>
          <div className={classes.flex}>
            <div className={classes.col}>
              <label className={classes.label}>Password</label>
              <input
                value={state.Password}
                onChange={handleChange}
                name="Password"
                type={"password"}
                className={classes.input}
              />
            </div>
            <div className={classes.col}>
              <label className={classes.label}>Confirm Password</label>
              <input
                value={state.ConfirmPassword}
                name="ConfirmPassword"
                onChange={handleChange}
                type={"password"}
                className={classes.input}
              />
            </div>
          </div>
          <div style={{ marginTop: "3%" }}>
            <label>Gender</label>
            <select
              name="Gender"
              onChange={handleChange}
              className={classes.select}
            >
              <option disabled={"true"}>Select</option>
              <option key={"Male"} value={"Male"}>
                Male
              </option>
              <option key={"Female"} value={"Female"}>
                Female
              </option>
            </select>
          </div>
          <label className={classes.label}>Bio</label>
          <textarea
            value={state.Bio}
            name="Bio"
            onChange={handleChange}
            className={(classes.input, classes.textarea)}
          />
          <div className={classes.flex}>
            <input type={"checkbox"} className={classes.checkbox} />
            <label className={classes.terms}>
              Yes, I understand the Terms of Service of TalentHunt, including
              the User Agreement and Privacy Policy
            </label>
          </div>
          <div className={classes.btnContainer}>
            <button onClick={SubmitHandler} className={classes.btn}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
