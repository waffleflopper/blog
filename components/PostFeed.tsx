import React from "react";
import styles from "../styles/PostFeed.module.css";
import Link from "next/link";
import { fromMillis } from "../lib/firebase";

interface Props {
  posts: any;
  admin?: boolean;
}

const PostFeed = ({ posts, admin }: Props) => {
  return posts
    ? posts.map((post) => (
        <PostItem post={post} key={post.slug} admin={admin} />
      ))
    : null;
};

export default PostFeed;

function PostItem({ post, admin = false }) {
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);
  const postLink = `${post.username}/${post.slug}`;

  return (
    <div className={styles.post}>
      <Link href={postLink}>
        <h2>{post.title}</h2>
      </Link>
      <span className={styles.postInfo}>
        {wordCount} words ~ {minutesToRead} minute read
      </span>
      {admin && (
        <>
          <p className={styles.admin}>
            <Link href={`/admin/${post.slug}`}>Edit</Link>
          </p>
          {post.published ? (
            <p className={styles.published}>Live</p>
          ) : (
            <p className={styles.unpublished}>Unpublished</p>
          )}
        </>
      )}
    </div>
  );
}
