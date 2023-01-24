import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import MovieTrailer from './Components/MovieTrailer';
import { movieData } from "./Data";

function App() {
  const [movies, setMovies] = useState(movieData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  return (
    <div className="App">
      <Filter setFilterTitle={setFilterTitle} filterRating={filterRating} setFilterRating={setFilterRating} />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} setMovies={setMovies} filterTitle={filterTitle} filterRating={filterRating} />} />
        <Route path="/:title" element={<MovieTrailer movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
