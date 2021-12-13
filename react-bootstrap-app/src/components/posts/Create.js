import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';

function App() {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2MzZDliYzBiYjMyNTg2ZTk3YTBhMyIsImVtYWlsIjoia29zdGFAdGVzdC5jb20iLCJpYXQiOjE2Mzk0MjU1MDIsImV4cCI6MTYzOTQyODUwMn0.xalZC5oHYMo9otvplCnAsRZzCNolMEYbbnXBmMUMOKQ'

    fetch('http://localhost:3001/posts', {
      method: 'post',
      body: JSON.stringify({
        title: title,
        content: content
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  }
  
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={(e) => { setTitle(e.target.value) }} type="text"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control onChange={(e) => { setContent(e.target.value) }} type="text"/>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
