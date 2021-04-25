import React from "react";
import { getUserWithUsername, postToJSON } from "../lib/firebase";
import firebase from "firebase/app";
import styles from "../styles/Profile.module.css";

interface Props {
  user: firebase.User;
}

const UserProfile = ({ user }: Props) => {
  return (
    <div className={styles.header}>
      <img className={styles.profileImage} src={user.photoURL} />
      <span className={styles.userInfo}>
        <h1>@{user.username}</h1>
        <p>{user.displayName}</p>
      </span>
    </div>
  );
};

export default UserProfile;

/*

<span class="header">
      <image class="profileImage" src="https://lh3.googleusercontent.com/a-/AOh14Gi9sN70DeRU4rxzyrUNP0zqrTOCEAk2hNa5_xvZ4w=s96-c">
      <span class="userInfo">
        <h1>@username</h1>
        <p>Full Name</p>
      </span>
    </span>
*/
