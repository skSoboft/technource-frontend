import React from "react";
import CommentList from "./CommentList"; 
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import InputField from "../common/InputField"; 

const CommentSection = ({ comments, onAddComment, onDeleteComment }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddComment = (data) => {
    console.log(data);
    
    reset();
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={12}>
          <div className="comment-section">
            <h3 className="text-center mb-3">Comments</h3>
            <CommentList comments={comments} onDelete={onDeleteComment} />
            <Form onSubmit={handleSubmit(handleAddComment)}>
              <InputField
                name="content"
                label="Add a comment:"
                control={control}
                rules={{ required: "Comment is required" }}
                error={errors.content}
                as="textarea"
                rows={3}
                placeholder="Add a comment..."
              />
              <div className="text-center mt-3 mb-3">
                <Button variant="primary" type="submit">
                  Add Comment
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CommentSection;
