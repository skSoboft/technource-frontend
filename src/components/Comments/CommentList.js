import React from "react";
import Comment from "./Comment"; 
import { ListGroup } from "react-bootstrap";

const CommentList = ({ comments, onDelete }) => {
  return (
    <div className="comment-list">
      <h4>Comments</h4>
      <ListGroup>
        {comments?.map((comment) => (
          <ListGroup.Item key={comment.id}>
            <Comment comment={comment} onDelete={onDelete} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CommentList;
