import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch('http://localhost:3001/posts')
    const data = await response.json();

    setPosts(data.posts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Table striped bordered hover variant="dark" className='mt-5'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map(post => {
              return (
                <tr key={post._id}>
                  <td><Link to={`/posts/${post._id}`}>{ post.title }</Link></td>
                  <td>{ post.content }</td>
                  <td>hhh</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
