import React, { useState } from 'react';
import PostList from '../components/Dashboard/PostList'; 
import PostEditor from '../components/Dashboard/PostEditor'; 
import { Button } from 'react-bootstrap';

const EditorDashboard = ({ posts, onDelete, onSave }) => {
  const [editingPost, setEditingPost] = useState(null);

  const handleEditPost = (post) => {
    setEditingPost(post);
  };

  const handleCreateOrUpdatePost = (newPost) => {
    onSave(newPost);
    setEditingPost(null);
  };

  return (
    <div className="editor-dashboard">
      <h2>Editor Dashboard</h2>
      <Button onClick={() => setEditingPost({})}>Create New Post</Button>
      {editingPost && (
        <PostEditor
          post={editingPost}
          onSubmit={handleCreateOrUpdatePost}
        />
      )}
      <PostList posts={posts} onDelete={onDelete} onEdit={handleEditPost} />
    </div>
  );
};

export default EditorDashboard;
