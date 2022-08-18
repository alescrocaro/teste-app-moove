import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound/index.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie/:id" element={<Movie />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
