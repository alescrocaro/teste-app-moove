import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api, api_key } from '../../services/api';
import './style.css';

import Header from '../../components/header';

export default function Movie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const getData = async () => {
    let data = await api.get(`/movie/${id}?api_key=${api_key}&language=pt-BR`);
    console.log(data.data);

    data.data.genre = data.data.genres[0].name;
    data.data.release_date = data.data.release_date.slice(0, -6);
    setMovie(data.data);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <Header />
      <div className="movieContainer">
        {/* 
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.backdrop_path}`}
          alt="backdrop"
        /> */}
        <Link to="/" className="backToHome">
          {'<'}
        </Link>
        <h1 className="title">
          {movie.title} ({movie.release_date})
        </h1>
        <div className="details">
          <div className="movieCardDetails">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="Poster"
              className="posterImgDetails"
            />
          </div>

          <div className="overview">
            {(movie.genre || movie.runtime) && (
              <>
                <h2>Detalhes</h2>
                <p>- {movie.genre}</p>
                <p>- {movie.runtime} minutos</p>
              </>
            )}
            {movie.overview && (
              <>
                <h2>Sinopse</h2>
                <p>{movie.tagline}</p>
                <p>{movie.overview}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
