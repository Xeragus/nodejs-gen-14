import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import PostsIndexPage from './pages/posts/Index';
import PostsCreatePage from './pages/posts/Create';
import PostShowPage from './pages/posts/Show';

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<PostsIndexPage />} />
        <Route path="/posts/:id" element={<PostShowPage />} />
        <Route path="/create" element={<PostsCreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
