import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import { api } from '../../services/api';

export default function MoviesInTheatres() {
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    let data = await api.get(
      '/movie/now_playing?api_key=0b52f543bf49e978de68ec261123f4f2&language=pt-BR'
    );

    data = data.data.results;

    data.splice(3, 17);
    // console.log(data);
    setMovies(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="moviesContainer">
      <p className="moviesText">Últimos 3 filmes em cartaz!</p>
      <div className="cardsContainer">
        {movies.map(movie => (
          <Link to={`movie/${movie.id}`} key={movie.id} className="movieCard">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="Poster"
              className="posterImg"
            />
            <p className="movieName">{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
