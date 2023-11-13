// wrhite the page
import image from './smileviolet.jpg';
import { Container, MovieList, Movie } from './style';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { apikey } from '../../config/key';

function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US&page=1`

        axios.get(apiUrl)           
        .then(response => {
            console.log(response.data)
            setMovies(response.genres)
        })
        .catch(function(error) {
            console.log(error)
        })

    }, [])

    return (
        <Container>
            <h1> Movies </h1>
            <MovieList> 
                {movies?.map((movie) => {                    
                        <Movie key={movie.id}>
                            <a href="https://gogole.com.br">
                                <img src={image} alt={movie.name} />
                            </a>
                            <span> {movie.name} </span>
                        </Movie>
                })}
            </MovieList>
        </Container>
    );
}
export default Home;
