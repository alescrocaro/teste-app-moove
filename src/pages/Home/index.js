import React, { useState } from 'react';
import './style.css';

import Header from '../../components/header';
import Search from '../../components/search';
import MoviesInTheatres from '../../components/moviesInTheatres';
import Chart from '../../components/chart';

export default function Home() {
  const [pageYPosition, setPageYPosition] = useState(0);

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY);
  }
  window.addEventListener('scroll', getPageYAfterScroll);

  return (
    <>
      {pageYPosition > 100 && (
        <a id="backToTop" href="#home">
          Voltar ao topo
        </a>
      )}
      <Header />
      <Search />
      <MoviesInTheatres />
      {/* <Chart /> */}
    </>
  );
}
