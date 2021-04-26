import React from "react";
import { getUserWithUsername, postToJSON } from "../lib/firebase";
import firebase from "firebase/app";
import styles from "../styles/Profile.module.css";

interface Props {
  user: firebase.User;
}

const UserProfile = ({ user }: Props) => {
  return (
    (user &&
      <div className={styles.header}>
        <img className={styles.profileImage} src={user.photoURL} />
        <span className={styles.userInfo}>
          <h1>@{user.username}</h1>
          <p>{user.displayName}</p>
        </span>
      </div>
    )
  );
};

export default UserProfile;

