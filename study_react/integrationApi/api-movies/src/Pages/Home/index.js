// wrhite the page
import { Container} from './style';
import { useState, useEffect } from 'react';
import MovieList from '../../components/movieList/movieList';
import axios from 'axios';
import { apikey } from '../../config/key';

function Home() {
    const [movies, setMovies] = useState([]);
    const img_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        populatedMovies();
    }, []);

    function populatedMovies() {
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;

        axios
            .get(apiUrl)
            .then((response) => {
                console.log(response.data);
                setMovies(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Container>
            <h1> Movies </h1>
            <MovieList/>
        </Container>
    );
}

export default Home;
