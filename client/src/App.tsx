import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';
import Write from './pages/Write';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/community/list" element={<List />} />
        <Route path="/community/post/:post_pk" element={<Detail />} />
        <Route path="/community/post/new" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
