import axios from 'axios';
import {baseURL} from '../constants';

export const api = {
  getMoviesList: body => axios.get(`${baseURL}/discover/movie`, body),
  getMovieById: (id, params) => axios.get(`${baseURL}/movie/${id}`, {params}),
  getSimilarMoviesById: (id, params) => axios.get(`${baseURL}/movie/${id}/similar`, {params}),
};
