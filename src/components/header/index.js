import React from 'react';
import './style.css';

export default function Header() {
  return (
    <div id="home" className="homeHeader">
      <a href="https://www.appmoove.com.br/" target="_blank" rel="noreferrer">
        <img
          width="131"
          height="36"
          alt=""
          className="logo"
          src="https://www.appmoove.com.br/images/pasted-svg-482078x110.svg?crc=247350096"
        />
      </a>
      <p className="name">Alexandre Aparecido Scrocaro Junior</p>
    </div>
  );
}
