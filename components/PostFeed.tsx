import React from "react";

interface Props {
  posts: any;
  admin: boolean;
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

  return <div>{post.username}</div>;
}
