import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2MzZDliYzBiYjMyNTg2ZTk3YTBhMyIsImVtYWlsIjoia29zdGFAdGVzdC5jb20iLCJpYXQiOjE2Mzk1OTU3MjYsImV4cCI6MTYzOTU5ODcyNn0.1Btdkqz2gZoPhMCE8SXahY5uGHczIrlt0k3AC-MYVsM'

    let formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    axios({
      method: 'post',
      url: 'http://localhost:3001/posts',
      data: formData,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
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
          <Form.Control type="file" onChange={(e) => { setImage(e.target.files[0]) }} />
        </Form.Group>
        
        {/* <Image src="http://localhost:3001/${post.image_url}" rounded /> */}
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
