import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InsertPost from './components/InsertPost';
import PostList from './components/Posts';
import EditPost from './components/EditPost';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/insert" element={<InsertPost />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/editPost/:id" element={<EditPost />} />
      </Routes>
    </Router>
  );
};

export default App;
