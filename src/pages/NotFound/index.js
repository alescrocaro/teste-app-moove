import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';

export default function NotFound() {
  return (
    <>
      <Header />
      <h1>Página não encontrada</h1>
      <Link to="/" style={{ color: 'white' }}>
        Voltar ao início
      </Link>
    </>
  );
}
