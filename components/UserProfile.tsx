import React from "react";
import { getUserWithUsername, postToJSON } from "../lib/firebase";
import firebase from "firebase/app";

interface Props {
  user: firebase.User;
}

const UserProfile = ({ user }: Props) => {
  return (
    <div>
      <img src={user.photoURL} />
      <p>@{user.username}</p>
      <p>{user.displayName}</p>
    </div>
  );
};

export default UserProfile;
