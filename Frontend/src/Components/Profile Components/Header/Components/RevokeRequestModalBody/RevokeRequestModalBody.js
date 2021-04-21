import classes from "./RevokeRequestModalBody.module.css";
import React, { useEffect, useState, useCallback } from "react";

const RevokeRequestModalBody = ({
  name,
  profilePic,
  closeModal,
  revokeRequest,
}) => {
  return (
    <div className={classes.card}>
      <img
        src={profilePic}
        alt="Profile Pic"
        className={classes.profileImage}
      />
      <div style={{ margin: "1rem" }}>
        <span>
          If you change your mind, you'll have to request to follow{" "}
          <span style={{ fontWeight: "bold" }}>{name + " "}</span>
          again.
        </span>
      </div>

      <button className={classes.btn} style={{ color: "red" }} onClick={revokeRequest}>
        Revoke
      </button>
      <button className={classes.btn} onClick={closeModal}>
        Cancel
      </button>
    </div>
  );
};

export default RevokeRequestModalBody;
