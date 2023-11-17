import axios from 'axios';
import { apikey } from '../config/key';

const img_path = 'https://image.tmdb.org/t/p/w500';
const baseURL = 'https://api.themoviedb.org/3/'

export const getMovieDetails = async (movieId) => {
    const response = await axios.get(`${baseURL}movie/${movieId}`, {
        params: { language: 'en', api_key: apikey },
    })
    return response.data;
};

export const getGenres = async () => {
    const response = await axios.get(`${baseURL}/genre/movie/list`, {
        params: { language: 'en', api_key: apikey },
    })
    return response.data.genres;
};

export const getMoviesByGenre = async (genreId) => {
    const response = await axios.get(`${baseURL}/discover/movie`, {
        params: { language: 'en', api_key: apikey, with_genres: genreId },
    });
    return response.data.results;
};

export const getPopularMovies = async () => {
    const response = await axios.get(`${baseURL}/movie/popular`, {
        params: { language: 'en', api_key: apikey, page: 1},
    });
    return response.data.results;
};