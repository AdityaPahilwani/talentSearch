/** @format */

import classes from "./SideDrawer.module.css";
import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { cache } from "../../../index";
import { getProfileData } from "../../../commonApollo/Queries/userQuery";
import navBar from "../Constants/navBarList";

/**
 * This component accepts an object , and it will traverse and map all side drawer titles and icons
 */
const SideDrawer = () => {
  const [state, setstate] = useState("Home");
  const router = useHistory();
  useEffect(() => {
    setstate(`/${router.location.pathname.split("/")[1]}`);
  }, []);
  const onClickHandler = (value) => {
    router.push(value);
  };
  const profiledata = cache.readQuery({
    query: getProfileData,
  });

  return (
    <div className={classes.Container}>
      <h1 className={classes.heading}>Talent Hunt</h1>
      <div>
        {Object.keys(navBar).map((item, index) => {
          return (
            <div className={classes.subContainer}>
              <h3 className={classes.subHeading}>{item}</h3>
              {navBar[item].map((data, index) => {
                let { Icon, title, path, createUrlPath } = data;

                path =
                  createUrlPath !== undefined
                    ? createUrlPath(profiledata?.getMe.id)
                    : `/${path?.split("/")[1]}`;

                return (
                  <div
                    onClick={onClickHandler.bind(this, path)}
                    className={
                      state === path ? classes.activeLink : classes.notActive
                    }>
                    <Icon size={20} />
                    <div className={classes.link}>
                      <span>{title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideDrawer;
