import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import BlogPost from "../components/Blog/BlogPost";
import { useForm } from "react-hook-form";
import api from "../utils/api";

const UserDashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await api.getBlogPosts();
        console.log("Response::", response);
        setPosts(response);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    }

    fetchBlogPosts();
  }, []);
  const [showModal, setShowModal] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const onSubmit = async (data) => {
    console.log(data);

    
    
    await api.createBlogPost(data);
    

    
    handleCloseModal();
    reset();
  };

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <div className="user-dashboard">
            <h2 className="text-center mb-4">User Dashboard</h2>
            <div className="text-center mb-4">
              <Button variant="primary" onClick={handleShowModal}>
                Add Blog
              </Button>
            </div>
            <Row>
              {posts?.map((post) => (
                <Col key={post.id} xs={12} md={12} lg={12} className="mb-4">
                  <BlogPost post={post} />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>

      {/* Add the Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                {...register("title", { required: "Title is required" })}
                isInvalid={!!errors.title}
              />
              {errors.title && (
                <Form.Control.Feedback type="invalid">
                  {errors.title.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                {...register("content", { required: "Content is required" })}
                isInvalid={!!errors.content}
              />
              {errors.content && (
                <Form.Control.Feedback type="invalid">
                  {errors.content.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add Blog
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default UserDashboard;
