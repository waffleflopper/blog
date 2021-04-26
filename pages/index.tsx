import React, { useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { firestore, postToJSON, fromMillis } from "../lib/firebase";
import PostFeed from '../components/PostFeed';


interface Props {
  posts: any;
}

const LIMIT = 10;

export async function getServerSideProps(context) {
  const postQuery = firestore
    .collectionGroup('posts')
    .where("published", "==", true)
    .orderBy("createdAt", "desc")
    .limit(LIMIT);

  const posts = (await postQuery.get()).docs.map(postToJSON);

  return {
    props: { posts },
  }
}

const Home = (props: Props) => {
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);
  const [postsEnd, setPostsEnd] = useState(false);

  const getMorePosts = async () => {

    setLoading(true);

    const last = posts[posts.length - 1];

    const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt;

    const query = firestore
      .collectionGroup('posts')
      .where("published", "==", true)
      .orderBy("createdAt", "desc")
      .startAfter(cursor)
      .limit(LIMIT);

    const newPosts = (await query.get()).docs.map((docs) => docs.data());

    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  }


  return (
    <main>
      <PostFeed posts={posts} />

      {!loading && !postsEnd && <button onClick={getMorePosts}>Load More</button>}

      <Loader show={loading} />

      {postsEnd && <p>No more posts</p>}
    </main>
  );
};

export default Home;
