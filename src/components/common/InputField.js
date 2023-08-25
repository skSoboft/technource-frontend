import React from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";

const InputField = ({ name, label, control, rules, error, ...rest }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Form.Control
            type="text" 
            {...field}
            isInvalid={!!error}
            {...rest}
          />
        )}
      />
      {error && (
        <Form.Control.Feedback type="invalid">
          {error.message}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default InputField;
