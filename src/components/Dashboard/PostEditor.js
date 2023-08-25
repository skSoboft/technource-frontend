import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../common/InputField'; 

const PostEditor = ({ onSubmit, post }) => {
  const methods = useForm();

  const handleSubmit = (data) => {
    const newPost = {
      title: data.title,
      content: data.content,
      id: post ? post.id : Date.now(), 
    };
    onSubmit(newPost);
    methods.reset();
  };

  return (
    <div className="post-editor">
      <h3>{post ? 'Edit Post' : 'Create New Post'}</h3>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(handleSubmit)}>
          <InputField
            name="title"
            label="Title:"
            defaultValue={post ? post.title : ''}
            required
          />
          <InputField
            name="content"
            label="Content:"
            as="textarea"
            rows={5}
            defaultValue={post ? post.content : ''}
            required
          />
          <Button variant="primary" type="submit">
            {post ? 'Update' : 'Create'}
          </Button>
        </Form>
      </FormProvider>
    </div>
  );
};

export default PostEditor;
