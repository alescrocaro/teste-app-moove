import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000 // 10 segundos
});

export const api_key = '0b52f543bf49e978de68ec261123f4f2';
