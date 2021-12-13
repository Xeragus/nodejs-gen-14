import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';

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
                  <td>{ post.title }</td>
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
