import axios from 'axios';
import { apikey } from '../config/key';

const baseURL = 'https://api.themoviedb.org/3'
const key = apikey

export const getGenres = async () => {
    const response = await axios.get(`${baseURL}${key}/genre/movie/list`, {
        params: { language: 'en', api_key: apikey },
    })
    return response.data.genres;
};

export const getMoviesByGenre = async (genreId) => {
    const response = await axios.get(`${baseURL}${key}/discover/movie`, {
        params: { language: 'en', api_key: apikey, with_genres: genreId },
    });
    return response.data.results;
};

export const getPopularMovies = async () => {
    const response = await axios.get(`${baseURL}${key}/movie/popular`, {
        params: { language: 'en', api_key: apikey, page: 1},
    });
    return response.data.results;
};