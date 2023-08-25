import React from "react";
import { Card, Button } from "react-bootstrap";

const Comment = ({ comment, onDelete }) => {
  const { content, author, id } = comment;

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Text>{content}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          Author: {author}
        </Card.Subtitle>
        {onDelete && (
          <Button variant="danger" onClick={() => onDelete(id)}>
            Delete
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Comment;
