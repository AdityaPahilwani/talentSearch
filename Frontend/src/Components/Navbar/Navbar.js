/** @format */

import React, { useState, useCallback, useEffect } from "react";
import classes from "./Navbar.module.css";
import { GoSearch } from "react-icons/go";
import { useHistory } from "react-router-dom";
import Paths from "../../Constants/paths";
import { LogoutMutation } from "./apollo/Logout";
import { useMutation } from "@apollo/client";
import { cache } from "../../index";
import path from "../../Constants/paths";

const Navbar = (props) => {
  const [Logout] = useMutation(LogoutMutation);
  const { showSideDrawer } = props;
  const history = useHistory();
  const [search, setSearch] = useState("");

  useEffect(() => {
    let queryParams = {};
    const query = new URLSearchParams(history.location.search);
    for (let param of query?.entries()) {
      queryParams[param[0]] = param[1];
    }
    if (queryParams.q) {
      setSearch(queryParams.q);
    }
    // console.log(queryParams.q, queryParams);
  }, []);

  const navigate = useCallback(() => {
    history.push("/search");
  }, [search]);
  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      navigate();
    }
  };
  const logoutHandler = async () => {
    try {
      Object.keys(cache.data.data).forEach((key) => cache.data.delete(key));
      console.log(cache.data.data);
      const { data } = await Logout();
      console.log(data);
      history.push(path.signIn);
    } catch (error) {
      history.push(path.signIn);
    }
  };
  return (
    <div className={classes.Container}>
      <div className={classes.searchContainer}>
        <GoSearch size={25} onClick={navigate} style={{ cursor: "pointer" }} />
        {/* <input
          placeholder={"Search"}
          className={classes.input}
          type={"text"}
          value={search}
          onChange={handleChange}
          onSubmit={navigate}
          onSubmitCapture={navigate}
          onKeyUp={onKeyUp}
        /> */}
      </div>
      <div>
        <button onClick={logoutHandler} className={classes.Logoutbtn}>
          Logout
        </button>
      </div>
      <div onClick={() => showSideDrawer(true)} className={classes.hamburger}>
        <div className={classes.lines}></div>
        <div className={classes.lines}></div>
        <div className={classes.lines}></div>
      </div>
    </div>
  );
};

export default Navbar;
