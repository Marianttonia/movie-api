import axios from 'axios';
import { apikey } from '../config/key';

const base= {
    baseURL: 'https://api.themoviedb.org/3',
}
const key = apikey

const api = {

    getPopularMovies: () => {
        const urlMoviesPop = `/movie/popular?api_key=${key}&language=en-US&page=1`;

        return axios.get(base.baseURL+urlMoviesPop);
    },

    getGenresMovies: () => {
        const urlMoviesGen = `/genre/movie/list?api_key=${key}&language=en-US&page=1`;

        return axios.get(base.baseURL+urlMoviesGen);
    }

};

export default api;
