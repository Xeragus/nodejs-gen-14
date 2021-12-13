import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import PostsTable from './components/posts/Table';
import CreatePost from './components/posts/Create';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        <PostsTable />
        <CreatePost />
      </div>
    </div>
  );
}

export default App;
