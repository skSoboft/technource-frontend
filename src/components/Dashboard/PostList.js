import React from "react";
import BlogPost from "../Blog/BlogPost"; 
import { ListGroup } from "react-bootstrap";

const PostList = ({ posts, onDelete }) => {
  return (
    <ListGroup className="post-list">
      {posts.map((post) => (
        <ListGroup.Item key={post.id}>
          <BlogPost post={post} onDelete={onDelete} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PostList;
