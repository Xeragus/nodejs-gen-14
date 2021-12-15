import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App(props) {
  const [post, setPost] = useState(null);

  const fetchPost = async (e) => {

    const id = '61ba4830ad59f6d7bb7a929b';

    let res = await axios({
      method: 'get',
      url: `http://localhost:3001/posts/${id}`,
    })

    setPost(res.data.post);
  }

  useEffect(() => {
    fetchPost();
  }, []);
  
  if (post) {
    return (
      <div>
        Title: { post.title }
        Content: { post.content }
        Image:
        <Image 
          src={`http://localhost:3001/${post.image}`}
          style={{ width: '100px', height: '100px' }}
          roundedCircle
        />
      </div>
    );
  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }
  
}

export default App;
