import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import { api, api_key } from '../../services/api';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    let data = {};
    if (searchText === '') {
      data = await api.get(`movie/popular?api_key=${api_key}&language=pt-BR`);
      console.log('nada');
    } else {
      data = await api.get(
        `/search/movie?api_key=${api_key}&query="${searchText}"&language=pt-BR`
      );
      console.log('pesquisou ', searchText);
    }
    data = data.data.results;

    data.splice(3, 17);
    console.log(data);
    setMovies(data);
  };

  useEffect(() => {
    getData();
  }, [searchText]);

  return (
    <div className="mainContainer">
      <p className="mainText">Procure pelo filme desejado</p>
      <div className="searchBoxContainer">
        <input
          type="text"
          className="searchBox"
          placeholder="Insira o nome do filme"
          onChange={e => {
            setSearchText(e.target.value);
          }}
        />
        <button className="searchIcon">Buscar</button>
      </div>
      {!searchText && (
        <p className="tempText">mostrando filmes mais populares...</p>
      )}
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
