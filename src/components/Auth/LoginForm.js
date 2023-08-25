import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import InputField from "../common/InputField"; 

const LoginForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    control, 
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
    
  };

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col xs={12} md={6} className="mx-auto p-4 bg-light rounded">
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <InputField
              name="username"
              label="Username:"
              control={control} 
              rules={{ required: "Username is required." }}
              error={errors.username} 
            />

            <InputField
              name="password"
              label="Password:"
              type="password"
              control={control} 
              rules={{ required: "Password is required." }}
              error={errors.password} 
            />

            <div className="text-center mt-4">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
