import logo from './logo.svg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css';
import {config} from './config.js';
import ShowMovie from './showMovie.jsx';
import  React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import mascot from './assets/Cat astronaut (3).gif';
import Search from './search.jsx';
import SearchPage from './searchPage.jsx';
import LandingPage from './landing.jsx';
function App() {
  const secret = config.SECRET;
  const [data, setData] = useState({});
  const [movie, setMovie] = useState(false);

  const handleMovieSearch = async (selectedMovie) => {
      const {name} = selectedMovie;
  }

  return (
    <Router>
      <div>
        <div className='header'>
        <Link to="/search">
            <button>Search</button>
        </Link>
        <Link to="/">
            <button>Home</button>
        </Link>
        </div>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/show-movie" element={<ShowMovie />} />
      </Routes>
      </div>
      
    </Router>
  );
}

export default App;