import React from "react";
import { getUserWithUsername, postToJSON } from "../../lib/firebase";
import firebase from "firebase/app";
import UserProfile from "../../components/UserProfile";
import PostFeed from "../../components/PostFeed";
import styles from "../../styles/Profile.module.css";

interface Props {
  user: firebase.User;
  posts: {};
}

export async function getServerSideProps({ query }) {
  const { username } = query; //get the username

  const userDoc = await getUserWithUsername(username);

  let user: firebase.firestore.DocumentData | null = null;
  let posts: {} | null = null;

  if (userDoc) {
    user = userDoc.data();

    const postsQuery = userDoc.ref //look at their posts and get published
      .collection("posts")
      .where("published", "==", true)
      .orderBy("createdAt", "desc")
      .limit(5);

    posts = (await postsQuery.get()).docs.map(postToJSON);
  }

  return {
    props: { user, posts },
  };
}

const UserProfilePage = ({ user, posts }: Props) => {
  return (
    <main className={styles.main}>
      <UserProfile user={user} />
      <PostFeed posts={posts} admin={true} />
    </main>
  );
};

export default UserProfilePage;
