import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import CommentSection from "../Comments/CommentSection";

const BlogPost = ({
  post,
  onDelete,
  comments,
  onAddComment,
  onDeleteComment,
}) => {
  const { title, content, author, id } = post;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>{title}</Card.Title>
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
            <CommentSection
              comments={comments}
              onAddComment={onAddComment}
              onDeleteComment={onDeleteComment}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPost;
