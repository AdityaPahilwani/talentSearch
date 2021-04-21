/** @format */

import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import SideDrawer from "../Components/Navbar/SideDrawer/Sidedrawer";
import classes from "./Page.module.css";
/**
 * HOC of page which wraps content with side drawer
 */
const Page = ({ children }) => {
  return (
    <div>
      <div className={classes.flex}>
        <div className={classes.SideBar}>
          <SideDrawer />
        </div>
        <div className={classes.children}>
          <Navbar />
          {children}
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Page;
